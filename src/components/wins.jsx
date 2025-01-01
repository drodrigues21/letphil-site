import {winsData} from "../data/winsData";
import "./wins.css";

const Wins = () => {
    // Split your data into three segments (adjust slice ranges as needed)
    const column1 = winsData.slice(0, 8);
    const column2 = winsData.slice(8, 16);
    const column3 = winsData.slice(16, 24);
  
    // Helper to create card elements
    const createCards = (winArray) => {
      return winArray.map((win, idx) => (
        <div className="win-card-wrapper" key={`${win.name}-${idx}`}>
          <div className="win-card">
            <div className="win-card--info">
              <h2>{win.name}</h2>
              <p>{win.win}</p>
            </div>
            <div className="win-card--img">
              <img src={win.image} alt={win.name} />
            </div>
          </div>
        </div>
      ));
    };
  
    return (
      <div className="win-card-container">
  
        <div className="win-marquee-container">
          
          {/* Column 1 scrolling down */}
          <div className="win-marquee-column col-1">
            <div className="scroll-block scroll-1">
              {createCards(column1)}
            </div>
            <div className="scroll-block scroll-2">
              {createCards(column1)}
            </div>
          </div>
  
          {/* Column 2 scrolling up */}
          <div className="win-marquee-column col-2">
            <div className="scroll-block scroll-1">
              {createCards(column2)}
            </div>
            <div className="scroll-block scroll-2">
              {createCards(column2)}
            </div>
          </div>
  
          {/* Column 3 scrolling down */}
          <div className="win-marquee-column col-3">
            <div className="scroll-block scroll-1">
              {createCards(column3)}
            </div>
            <div className="scroll-block scroll-2">
              {createCards(column3)}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Wins;