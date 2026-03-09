let browser = "Edge";

switch (browser) {

    case "Chrome":
    case "Edge":
    case "Brave":

        console.log("Browser belongs to Chromium");
        break; // Grouping of all cases so if one case is true then it's execute 

    case "FireFox":
        console.log("Browser belongs to FireFox");
        break;

    case "Safari":
        console.log("Browser belongs to IOS");

}