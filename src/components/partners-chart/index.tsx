"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TGetPartnersResponse } from "@/lib/partner/types";
import { Pie, PieChart } from "recharts";

type PartnerChartData = {
  nameKey: string;
  participation: number;
  label: string;
  fill: string;
};

const CHART_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

export function PartnerChart({
  partners,
}: {
  partners: TGetPartnersResponse[];
}) {
  const top4Partners = partners.slice(0, 4);

  const othersParticipation = partners
    .slice(4)
    .reduce((sum, partner) => sum + partner.participationPercentage, 0);

  const top4ChartData: PartnerChartData[] = top4Partners.map((p, index) => ({
    nameKey: `${p.firstName} ${p.lastName}`,
    participation: p.participationPercentage,
    label: `${p.firstName} ${p.lastName}`,
    fill: CHART_COLORS[index],
  }));

  const othersChartData: PartnerChartData[] =
    othersParticipation > 0
      ? [
          {
            nameKey: "other",
            participation: othersParticipation,
            label: "Outros",
            fill: CHART_COLORS[4],
          },
        ]
      : [];

  let chartData: PartnerChartData[] = [...top4ChartData, ...othersChartData];

  chartData = chartData.sort((a, b) => b.participation - a.participation);

  const chartConfig: ChartConfig = {
    participation: { label: "Participação (%)" },
  };

  top4ChartData.forEach((data, index) => {
    chartConfig[data.nameKey] = {
      label: data.label,
      color: CHART_COLORS[index],
    };
  });

  if (othersParticipation > 0) {
    chartConfig["other"] = {
      label: "Outros",
      color: CHART_COLORS[4],
    };
  }

  return (
    <ChartContainer
      config={chartConfig as ChartConfig}
      className="w-full max-w-[400px]"
    >
      <PieChart className="w-fit">
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent nameKey="label" />}
        />
        <Pie
          data={chartData}
          dataKey="participation"
          nameKey="nameKey"
          fill="fill"
          stroke="0"
          innerRadius={40}
          outerRadius={80}
          cx="50%"
          cy="50%"
          className="w-fit"
        />
        <ChartLegend
          content={<ChartLegendContent nameKey="nameKey" />}
          layout="vertical"
          verticalAlign="middle"
          align="right"
          className="flex flex-col space-y-1"
        />
      </PieChart>
    </ChartContainer>
  );
}
