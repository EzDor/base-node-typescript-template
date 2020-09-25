class HelloService {
  public sayHello(): void {
    console.log('Hello World');
  }
}

export const helloService: HelloService = new HelloService();
