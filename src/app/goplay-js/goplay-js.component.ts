import { Component, OnInit } from "@angular/core";
import { initialize } from "@hotplay/hotplay-js";
@Component({
  selector: "app-goplay-js",
  templateUrl: "./goplay-js.component.html",
  styleUrls: ["./goplay-js.component.css"],
})
export class GoplayJsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    async () => {
      await initialize({
        environment: "dev",
        gameId: 123,
        gameState: "development",
      });
    };
  }
}
