split(separator: string = ""): A<string> {
    var str = this.s();
    return new A<string>(str.split(separator));
}