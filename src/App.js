import React, { Component } from "react";
import CameraList from "./components/cameras-list/camera-list-component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cameras: [
        {
          id: 1,
          name: "Nikon F3",
          imageUrl: process.env.PUBLIC_URL + "/images/nikonf3.png",
          description: "A classic, robust 35mm SLR camera produced by Nikon.",
        },
        {
          id: 2,
          name: "Canon AE-1",
          imageUrl: process.env.PUBLIC_URL + "/images/canonaAE1.png",
          description:
            "One of the most popular 35mm SLR cameras with manual focus.",
        },
        {
          id: 3,
          name: "Polaroid Now+",
          imageUrl: process.env.PUBLIC_URL + "/images/nowplus.webp",
          description:
            "A modern instant camera with vintage Polaroid simplicity.",
        },
        {
          id: 4,
          name: "Canon SureShot Z115",
          imageUrl: process.env.PUBLIC_URL + "/images/canonSureshot.png",
          description: "A reliable point-and-shoot camera with 35-115mm lens.",
        },
        {
          id: 5,
          name: "Mamiya c220",
          imageUrl: process.env.PUBLIC_URL + "/images/mamiyac220.png",
          description:
            "A professional level medium format twin-lens reflex camera.",
        },
        {
          id: 6,
          name: "Leica M6",
          imageUrl: process.env.PUBLIC_URL + "/images/leicam6.png",
          description:
            "A premium 35mm rangefinder camera known for its superb quality.",
        },
        {
          id: 7,
          name: "Pentax 67",
          imageUrl: process.env.PUBLIC_URL + "/images/pentax.png",
          description:
            "A classic medium format SLR camera loved by professional photographers.",
        },
        {
          id: 8,
          name: "Hasselblad 500C/M",
          imageUrl: process.env.PUBLIC_URL + "/images/hasselblad.png",
          description:
            "A legendary medium format camera, known for its modularity and image quality.",
        },
        {
          id: 9,
          name: "Rolleiflex 2.8F",
          imageUrl: process.env.PUBLIC_URL + "/images/rolleiflex.png",
          description:
            "A high-end, square-format twin lens reflex (TLR) camera that's a favorite among street photographers.",
        },
        {
          id: 10,
          name: "Contax RTS III",
          imageUrl: process.env.PUBLIC_URL + "/images/contax.png",
          description:
            "A solid 35mm SLR camera renowned for its outstanding Zeiss lenses.",
        },
        {
          id: 11,
          name: "Yashica Electro 35",
          imageUrl: process.env.PUBLIC_URL + "/images/yashica.png",
          description:
            "A popular rangefinder camera with a sharp 45mm f/1.7 lens.",
        },
        {
          id: 12,
          name: "Minolta X-700",
          imageUrl: process.env.PUBLIC_URL + "/images/minolta.png",
          description:
            "A user-friendly 35mm SLR camera with automatic exposure mode.",
        },
        {
          id: 13,
          name: "Olympus OM-1",
          imageUrl: process.env.PUBLIC_URL + "/images/olympus.png",
          description: "A compact, lightweight, mechanical 35mm SLR camera.",
        },
        {
          id: 14,
          name: "Lomo LC-A",
          imageUrl: process.env.PUBLIC_URL + "/images/lomo.png",
          description: "The camera that sparked the lomography movement.",
        },
        {
          id: 15,
          name: "Ricoh GR1",
          imageUrl: process.env.PUBLIC_URL + "/images/ricoh.png",
          description: "A high-quality compact camera with a 28mm f/2.8 lens.",
        },
        {
          id: 16,
          name: "Pentax K1000",
          imageUrl: process.env.PUBLIC_URL + "/images/pentaxk1000.png",
          description:
            "A classic, fully manual 35mm SLR camera perfect for beginners.",
        },
        {
          id: 17,
          name: "Leica M3",
          imageUrl: process.env.PUBLIC_URL + "/images/leicam3.png",
          description: "One of the finest rangefinder cameras ever made.",
        },
        {
          id: 18,
          name: "Nikon FM2",
          imageUrl: process.env.PUBLIC_URL + "/images/nikonfm2.png",
          description: "A mechanical shutter, manual focus 35mm SLR camera.",
        },
        {
          id: 19,
          name: "Canon F-1",
          imageUrl: process.env.PUBLIC_URL + "/images/canonf1.png",
          description:
            "Canon's professional grade, fully mechanical 35mm SLR camera.",
        },
        {
          id: 20,
          name: "Fujifilm Instax Mini 9",
          imageUrl: process.env.PUBLIC_URL + "/images/fuji.png",
          description:
            "A modern instant film camera, producing credit card-sized prints.",
        },
        {
          id: 21,
          name: "Zenza Bronica SQ",
          imageUrl: process.env.PUBLIC_URL + "/images/zenzabronica.png",
          description:
            "A modular medium format camera, providing 6x6 square format images.",
        },
      ],
      filteredCameras: [],
    };
  }

  componentDidMount() {
    this.setState({ filteredCameras: this.state.cameras });
  }

  onSearchChange = (event) => {
    const filteredCameras = this.state.cameras.filter((camera) => {
      return camera.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    this.setState({ filteredCameras });
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">My Favourite Cameras</h1>
        <div class="custom-shape-divider-top-1690180447">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
          <div class="custom-shape-divider-bottom-1690190415">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>

        <SearchBox
          placeholder="search cameras"
          handleChange={this.onSearchChange}
          className="searchBoxClass"
        />

        <CameraList cameras={this.state.filteredCameras} />
      </div>
    );
  }
}

export default App;
