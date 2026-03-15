function Suite(Suitename, ...Results) {
    console.log(`Suite: ${Suitename}`);
    console.log(`Results are : ${Results.join(",")}`)
}
Suite("Suite1", "Pass", "Fail", "Pass");
