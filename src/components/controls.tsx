import ControlsProps from "../types/controls";

const Controls = ({ reset, incrBy5, incrBy10 }: ControlsProps) => {
  const controls = [
    { action: reset, title: "Remettre à zéro les compteurs" },
    { action: incrBy5, title: "Ajouter 5%" },
    { action: incrBy10, title: "Ajouter 10%" },
  ];

  return (
    <div>
      {controls.map((c) => (
        <button
          className="h-[40px] bg-[#373737] mr-[20px] Roboto-regular text-[14px] px-[12px] cursor-pointer hover:Blur-propagate"
          onClick={(e) => {
            const target = e.target as HTMLElement;
            target.classList.add("opacity-30", "bg-slate-600");
            setTimeout(() => {
              target.classList.remove("opacity-30", "bg-slate-600");
            }, 30);
            c.action(true);
          }}
        >
          {c.title}
        </button>
      ))}
    </div>
  );
};

export default Controls;
