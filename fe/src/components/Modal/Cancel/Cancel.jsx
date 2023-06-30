export default function Cancel({ className, setModalType }) {
  return (
    <button
      className={className}
      type="button"
      onClick={() => setModalType('')}
    >
      닫기
    </button>
  );
}
