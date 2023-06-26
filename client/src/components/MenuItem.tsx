interface MenuProps {
  menu: Menu;
}

export default function MenuItem({ menu }: MenuProps) {
  return (
    <>
      <img src={menu.imageSrc} alt={menu.name} />
      <span>{menu.name}</span>
      <span>{menu.price}</span>
      {menu.isPopular && <PopularMark />}
    </>
  );
}

function PopularMark() {
  return (
    <div>
      <span>인기</span>
    </div>
  );
}
