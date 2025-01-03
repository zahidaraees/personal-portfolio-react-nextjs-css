"use client";
import React, { Component } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface YoutubeVideoState {
  players: Array<YT.Player | null>;
}

export default class YoutubeVideo extends Component<object, YoutubeVideoState> {
  videoIds = [
    "Uka1I5BRsmc",
    "Q-ZBwJskS7E",
    "FR1mSeKaC1U",
    "0E1rSKqshkU",
    "35IkrQixNkc",
    "WU121gLOv00",
    "6dwKdJnTtH4",
    "bc8PtG0KeFM",
    "y48OemuOmlY",
    "w4GE8UiuD6s",
    "1SsTUFCiDfo",
    "jERYMAn9BTc",
  ];

  constructor(props: object) {
    super(props);
    this.state = {
      players: new Array(this.videoIds.length).fill(null), // Initialize with null
    };
  }

  handlePlay = (index: number) => {
    this.state.players.forEach((player, i) => {
      if (i !== index && player) {
        player.pauseVideo();
      }
    });
  };

  onPlayerReady = (event: YT.PlayerEvent, index: number) => {
    console.log("Player ready:", index, event.target);
    this.setState((prevState) => {
      const updatedPlayers = [...prevState.players];
      updatedPlayers[index] = event.target;
      return { players: updatedPlayers };
    });
  };

  render() {
    const opts: YouTubeProps["opts"] = {
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <div className="flex flex-wrap justify-center gap-4 p-8">
        {this.videoIds.map((videoId, index) => (
          <div className="video-container mx-auto" key={index}>
            <YouTube
              videoId={videoId}
              opts={opts}
              onReady={(event) => this.onPlayerReady(event, index)}
              onPlay={() => this.handlePlay(index)}
            />
          </div>
        ))}
      </div>
    );
  }
}
