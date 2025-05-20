import { Component, inject } from "@angular/core";
import { CountService } from "../../services/count-service";

@Component({
  selector: "app-count",
  imports: [],
  templateUrl: "./count.component.html",
  styleUrl: "./count.component.scss",
})
export class CountComponent {
  countService = inject(CountService);
}
