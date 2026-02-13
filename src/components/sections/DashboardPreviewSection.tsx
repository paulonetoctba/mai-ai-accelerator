import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { TrendingUp, AlertTriangle, Lightbulb, DollarSign } from "lucide-react";

const roiData = [
  { month: "Jan", antes: 12000, depois: 15000 },
  { month: "Fev", antes: 13000, depois: 19000 },
  { month: "Mar", antes: 11000, depois: 22000 },
  { month: "Abr", antes: 14000, depois: 28000 },
  { month: "Mai", antes: 13500, depois: 35000 },
  { month: "Jun", antes: 15000, depois: 42000 },
];

const channelData = [
  { name: "Google Ads", value: 35 },
  { name: "Meta Ads", value: 28 },
  { name: "TikTok", value: 15 },
  { name: "LinkedIn", value: 12 },
  { name: "Orgânico", value: 10 },
];

const COLORS = ["hsl(180 100% 50%)", "hsl(270 100% 65%)", "hsl(150 100% 50%)", "hsl(45 100% 60%)", "hsl(0 84% 60%)"];

const performanceData = [
  { metric: "CAC", value: 45, change: -38 },
  { metric: "LTV", value: 89, change: +52 },
  { metric: "ROAS", value: 72, change: +247 },
  { metric: "Conv.", value: 64, change: +89 },
];

const alerts = [
  { type: "success", icon: TrendingUp, text: "ROI acumulado cresceu 247% nos últimos 6 meses" },
  { type: "warning", icon: AlertTriangle, text: "Gargalo identificado: taxa de conversão mobile caiu 12%" },
  { type: "insight", icon: Lightbulb, text: "Oportunidade: realocar 15% do budget de LinkedIn para TikTok" },
  { type: "revenue", icon: DollarSign, text: "Economia mensal de R$12.400 com otimizações automáticas" },
];

const DashboardPreviewSection = () => {
  return (
    <section id="dashboard-preview" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
            Dashboard de
            <br />
            <span className="gradient-text">ROI Inteligente</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como a MAI transforma dados fragmentados em uma visão 360º do seu marketing.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="glass-card p-6 rounded-3xl glow-pulse">
          {/* Top metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {performanceData.map((item, i) => (
              <div key={i} className="glass-card p-4 rounded-xl">
                <p className="text-xs text-muted-foreground mb-1">{item.metric}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold font-heading gradient-text">{item.value}%</span>
                  <span className={`text-xs font-semibold ${item.change > 0 ? "text-accent" : "text-destructive"}`}>
                    {item.change > 0 ? "+" : ""}{item.change}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts grid */}
          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            {/* ROI Chart */}
            <div className="lg:col-span-2 glass-card p-4 rounded-xl">
              <h4 className="text-sm font-semibold mb-4">Crescimento Antes vs Depois da MAI</h4>
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={roiData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(217 32% 20%)" />
                  <XAxis dataKey="month" stroke="hsl(215 20% 65%)" fontSize={12} />
                  <YAxis stroke="hsl(215 20% 65%)" fontSize={12} tickFormatter={(v) => `${v / 1000}k`} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(222 47% 8%)",
                      border: "1px solid hsl(217 32% 20%)",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                    formatter={(value: number) => [`R$ ${value.toLocaleString()}`, ""]}
                  />
                  <Area type="monotone" dataKey="antes" stroke="hsl(0 84% 60%)" fill="hsl(0 84% 60% / 0.1)" strokeWidth={2} strokeDasharray="5 5" name="Antes" />
                  <Area type="monotone" dataKey="depois" stroke="hsl(180 100% 50%)" fill="hsl(180 100% 50% / 0.15)" strokeWidth={2} name="Depois (MAI)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Channel Distribution */}
            <div className="glass-card p-4 rounded-xl">
              <h4 className="text-sm font-semibold mb-4">Distribuição por Canal</h4>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie data={channelData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value" paddingAngle={3}>
                    {channelData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(222 47% 8%)",
                      border: "1px solid hsl(217 32% 20%)",
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                    formatter={(value: number) => [`${value}%`, ""]}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-1 mt-2">
                {channelData.map((channel, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                      <span className="text-muted-foreground">{channel.name}</span>
                    </div>
                    <span className="font-medium">{channel.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Alerts & Insights */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Insights & Alertas Estratégicos</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {alerts.map((alert, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 p-3 rounded-xl border ${
                    alert.type === "success" ? "bg-accent/5 border-accent/20" :
                    alert.type === "warning" ? "bg-yellow-500/5 border-yellow-500/20" :
                    alert.type === "insight" ? "bg-secondary/5 border-secondary/20" :
                    "bg-primary/5 border-primary/20"
                  }`}
                >
                  <alert.icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                    alert.type === "success" ? "text-accent" :
                    alert.type === "warning" ? "text-yellow-500" :
                    alert.type === "insight" ? "text-secondary" :
                    "text-primary"
                  }`} />
                  <span className="text-xs text-muted-foreground">{alert.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreviewSection;
