import { v4 as uuidv4 } from "uuid";

export class Trace {
  private static instance: Trace;
  private id: string = "";

  private constructor() {}

  public static traceId(start: boolean = false): string {
    if (!Trace.instance) {
      Trace.instance = new Trace();
      Trace.instance.id = uuidv4();
    } else if (Trace.instance && start) {
      Trace.instance.id = uuidv4();
    }
    return Trace.instance.id;
  }
}
