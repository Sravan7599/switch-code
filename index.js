let grade=30;
switch(true)
{
    case (grade<35):
       console.log("Fail");
       break;
    case (grade>=35 && grade<60):
        console.log("Second class");
        break;
    case (grade>=60 && grade<80):
        console.log("First class");
        break;
    case (grade>=85):
        console.log("Distinction");
        break;
    default:
        console.log("Enter a valid grade");
}