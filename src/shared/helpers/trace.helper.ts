import { uuid as uuidv4 } from "uuidv4";

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
