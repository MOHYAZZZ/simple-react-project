import React, { Component } from "react";
import "./camera-list.styles.css";

class CameraList extends Component {
  render() {
    return (
      <div className="card-list">
        {this.props.cameras.map((camera) => (
          <div className="card-container" key={camera.id}>
            <div style={{ height: "200px", display: "flex" }}>
              <img
                className="image-size"
                alt={camera.name}
                src={camera.imageUrl}
              ></img>
            </div>
            <h3>{camera.name}</h3>
            <p className="camera-item-description">{camera.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CameraList;
