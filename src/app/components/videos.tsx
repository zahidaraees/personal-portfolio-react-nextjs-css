"use client"; // Use "use client" in Next.js
import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

export default class YoutubeVideo extends React.Component {
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

  render() {
    const opts: YouTubeProps["opts"] = {
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {this.videoIds.map((videoId, index) => (
          <div className="video-container" key={index}>
            <YouTube videoId={videoId} opts={opts} onReady={this._onReady} />
          </div>
        ))}
      </div>
    );
  }

  _onReady(event: YT.PlayerEvent) {
    event.target.pauseVideo();
  }
}
