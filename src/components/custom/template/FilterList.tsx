import FilterItem from "./FilterItem";
import { TemplateType, templateData } from "@/data/templateData";

export default function FilterList() {
  return (
    <div className="w-full mt-10 flex gap-4 flex-wrap">
      {templateData.map((data: TemplateType, index: number) => {
        return <FilterItem {...data} key={index} />;
      })}
    </div>
  );
}
