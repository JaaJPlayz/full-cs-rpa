using OpenQA.Selenium.Chrome;
using OpenQA.Selenium;

using var driver = new ChromeDriver();

// localhost:5173
// The frontend should be running on localhost:5173 locally for this to work
driver.Url = "http://localhost:5173";

Console.WriteLine("Hello, World!");
Console.WriteLine(driver.Title);
Console.WriteLine(driver.Url);
Console.WriteLine(driver.PageSource);

// Grab the text content of the element with the class same "sample-username"
var username = driver.FindElement(By.ClassName("sample-username"));
Console.WriteLine(username.Text);

// Grab the text content of the element with the class same "sample-email"
var email = driver.FindElement(By.ClassName("sample-email"));
Console.WriteLine(email.Text);

// Grab the text content of the element with the class same "sample-password"
var password = driver.FindElement(By.ClassName("sample-password"));
Console.WriteLine(password.Text);

// Grab the first input element (username)
var inputUsername = driver.FindElements(By.TagName("input"))[0];
Console.WriteLine(inputUsername.GetAttribute("value"));

// Grab the second input element (email)
var inputEmail = driver.FindElements(By.TagName("input"))[1];
Console.WriteLine(inputEmail.GetAttribute("value"));

// Grab the third input element (password)
var inputPassword = driver.FindElements(By.TagName("input"))[2];
Console.WriteLine(inputPassword.GetAttribute("value"));

// Split the string and get only the part after the : character
var lastPartUsername = username.Text.Split(':')[1].Trim();
var lastPartEmail = email.Text.Split(':')[1].Trim();
var lastPartPassword = password.Text.Split(':')[1].Trim();

//Write the sample-username, sample-email, and sample-password values to the right input fields
inputUsername.SendKeys(lastPartUsername);
inputEmail.SendKeys(lastPartEmail);
inputPassword.SendKeys(lastPartPassword);

// Click the submit button
var submitButton = driver.FindElement(By.TagName("button"));
submitButton.Click();

// Keep the console open
Console.WriteLine("Press any key to exit...");
Console.ReadKey();

// Clear the input fields
inputUsername.Clear();
inputEmail.Clear();
inputPassword.Clear();
