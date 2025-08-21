export default function Header() {
  const leftValues = ["Demos", "Our Church", "Donations"];
  const rightValues = ["Events", "All Pages", "Contact Us"];

  return (
    <div className="w-full p-[24px] absolute z-1">
      <div className="flex justify-between">
        <div className="flex">
          {leftValues.map((value) => (
            <div className="pr-[20px]">{value}</div>
          ))}
        </div>
        <div>
          <div>RELIGIOUS</div>
        </div>
        <div className="flex">
          {rightValues.map((value) => (
            <div className="pr-[10px]">{value}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
