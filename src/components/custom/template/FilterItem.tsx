interface FilterItemType {
  text: string;
}

export default function FilterItem(props: FilterItemType) {
  return (
    <button className="px-3 py-2 rounded-lg duration-200 ease-out cursor-pointer hover:bg-main-hover active:scale-[.98] group">
      <span className="text-sm  text-main-secondary font-geist duration-200 transition-all ease-in-out group-hover:text-white">
        {props.text}
      </span>
    </button>
  );
}
