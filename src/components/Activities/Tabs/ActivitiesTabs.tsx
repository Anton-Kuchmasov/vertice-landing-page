import * as Tabs from "@radix-ui/react-tabs";
import "./ActivitiesTabs.scss";
import type { TabContentType } from "./TabContent";
import TabContent from "./TabContent";

const activitiesTabsContent: TabContentType[] = [
  {
    value: "bot",
    accentText: "VÉRTICE: ",
    title: "cuando el trading deja de ser caos.",
    benefits: [
      {
        title: "Filtro algorítmico de señales",
        benefit:
          "Filtra entradas basadas en estructura, estadística y contexto del mercado. Nada de intuiciones, solo señales con lógica.s",
      },
      {
        title: "Adaptación a la volatilidad",
        benefit:
          "VÉRTICE detecta picos y momentos de caos en el gráfico — las señales se bloquean automáticamente en zonas inestables.",
      },
      {
        title: "Coherencia en cada entrada",
        benefit:
          "Cada operación tiene sentido dentro de la estrategia. Así operan los profesionales: sin ruido, sin prisas.",
      },
    ],
    mediaContent: "first-tab.png",
    objectFit: "cover",
    hasLinkToTGBot: true,
  },
  {
    value: "youtube",
    accentText: "Formación real. ",
    title: "Sin promesas, con resultados.",
    benefits: [
      {
        title: "Operaciones reales en vivo",
        benefit:
          "Armando no solo habla: muestra. Sesiones grabadas donde se explica cada entrada en tiempo real.",
      },
      {
        title: "Guías prácticas de estrategias",
        benefit:
          "Videos paso a paso con lo que realmente funciona. Sin relleno, sin marketing, solo contenido útil.",
      },
      {
        title: "Análisis con experiencia",
        benefit:
          "Noticias, niveles clave, análisis estructural — contenido de trader para traders. Aprende con visión profesional.",
      },
    ],
    videoLink: "second-tab.mp4",
    objectFit: "cover",
  },
  {
    value: "formacion",
    title: "De principiante a trader independiente — paso a paso.",
    benefits: [
      {
        title: "Configuración completa",
        benefit:
          "Te ayudamos a configurar la plataforma, los indicadores y el bot para que empieces sin bloqueos.",
      },
      {
        title: "Análisis de tus operaciones",
        benefit:
          "Revisión semanal de tus entradas, errores y mejoras. Formación personalizada, no genérica.",
      },
      {
        title: "Comunidad privada",
        benefit:
          "Donde no se habla de “predicciones”, sino de estructuras y entradas con lógica. Acompañamiento real y aprendizaje colectivo.",
      },
    ],
    mediaContent: "third-tab.png",
    objectFit: "contain",
  },
];

const ActivitiesTabs = () => {
  return (
    <Tabs.Root className="activities-tabs" defaultValue="bot">
      <Tabs.List className="tabs-list">
        <Tabs.Trigger className="tab-trigger" value="bot">
          {" "}
          VÉRTICE Bot
        </Tabs.Trigger>
        <Tabs.Trigger className="tab-trigger" value="youtube">
          Canal de YouTube
        </Tabs.Trigger>
        <Tabs.Trigger className="tab-trigger" value="formacion">
          {" "}
          Formación individual
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="tab-content-wrapper" value="bot">
        <TabContent
          content={activitiesTabsContent.find((tab) => tab.value === "bot")}
        />
      </Tabs.Content>
      <Tabs.Content className="tab-content-wrapper" value="youtube">
        <TabContent
          content={activitiesTabsContent.find((tab) => tab.value === "youtube")}
        />
      </Tabs.Content>
      <Tabs.Content className="tab-content-wrapper" value="formacion">
        <TabContent
          content={activitiesTabsContent.find(
            (tab) => tab.value === "formacion"
          )}
        />
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default ActivitiesTabs;
