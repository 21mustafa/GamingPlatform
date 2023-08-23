import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../Header";

export const IndexPage = () => {

  return (
    <>
    <div class="first-section">
        <div class="p-section">
          <img src="/assets/3D game Dev.png" alt="3D" />
          <h1>Work that we produce for our clients</h1>
          <p class="p-top">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <button class="get-button">Get more details</button>
        </div>

        <div class="picture-section">
          <img
            class="joy-stick"
            src="/assets/joy_stick 1.png"
            alt="joy_stick"
          />
          <div class="icon-container">
            <img src="/assets/unreal 1.png" alt="uneral" />
            <img src="/assets/cry 1.png" alt="cry" />
            <img src="/assets/unity 1.png" alt="unity" />
          </div>
        </div>
      </div>

      <div>
        <h2>Currently Trending Games</h2>
        <div class="game-container">
          <div class="game-card">
            <img src="/assets/Rectangle 23.png" alt="game1" />
            <span class="fire"
              ><i class="fa-solid fa-fire"></i> 621 Followers
            </span>
          </div>
          <div class="game-card">
            <img src="/assets/Rectangle 24.png" alt="game2" />
            <span class="fire"
              ><i class="fa-solid fa-fire"></i> 512 Followers
            </span>
          </div>
          <div class="game-card">
            <img src="/assets/Rectangle 25.png" alt="game3" />
            <span class="fire"
              ><i class="fa-solid fa-fire"></i> 394 Followers
            </span>
          </div>
          <div class="game-card">
            <img src="/assets/Rectangle 26.png" alt="game4" />
            <span class="fire"
              ><i class="fa-solid fa-fire"></i> 403 Followers
            </span>
          </div>
        </div>
      </div>

      <p class="p-one">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <h2>Lorem Ipsum</h2>
      <p class="p-mid">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>

      <img class="spider" src="/assets/Rectangle 4.png" alt="spider" />

      <div class="dark-photo">
        <p class="p-one">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <p class="p-bottom">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>

        <div class="icons">
          <div class="icon">
            <i class="fa-solid fa-mobile fa-3x"></i>
            <span>Mobile Game Development</span>
          </div>

          <div class="icon">
            <i class="fa-solid fa-computer fa-3x"></i>
            <span>PC Game Development</span>
          </div>

          <div class="icon">
            <i class="fa-brands fa-playstation fa-3x"></i>
            <span>PS Game Development</span>
          </div>

          <div class="icon">
            <i class="fa-solid fa-vr-cardboard fa-3x"></i>
            <span>AR/VR Solutions</span>
          </div>

          <div class="icon">
            <i class="fa-brands fa-unity fa-3x"></i>
            <span>3D Modelings</span>
          </div>
        </div>
      </div>

      <p class="p-one">Our Recent Projects</p>

      <p class="p-bottom">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <div class="photo-a">
        <img src="/assets/Rectangle 15.png" alt="img1" />
        <img src="/assets/Rectangle 16.png" alt="img2" />
        <img src="/assets/Rectangle 17.png" alt="img3" />
      </div>

      <div class="photo-a">
        <img src="/assets/Rectangle 19.png" alt="img4" />
        <img src="/assets/Rectangle 18.png" alt="img5" />
        <img src="/assets/Rectangle 20.png" alt="img6" />
      </div>
    </>
  );
};
