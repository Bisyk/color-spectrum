import './PalleteNames.scss'

export const PalleteNames = ({ themeColor }) => {
  return (
    <div
      className="palletenames"
      style={{ color: themeColor === "#1E1E20" ? "white" : "black" }}
    >
      <p>B/W</p>
      <p>Cloud</p>
      <p>Grape</p>
      <p>Ocean</p>
      <p>Sky</p>
      <p>Frog</p>
      <p>Sun</p>
      <p>Fox</p>
      <p>Apple</p>
      <p>Pig</p>
    </div>
  );
};
