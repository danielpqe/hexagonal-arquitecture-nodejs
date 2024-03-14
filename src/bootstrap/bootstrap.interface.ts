export default abstract class Bootstrap {
  abstract initialize(): Promise<boolean | Error>;
}
