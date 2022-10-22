# Weight Loss Calculators

## Description
A calculator for the BMI (Body Mass Index) and BAI (Body Adiposity Index), designed for people 21 years old and up.

Made using:
- JavaScript
- JSX
- Tailwind CSS

## What Are BMI and BAI?
### BMI
BMI stands for body mass index but was formerly called the Quetelet index after its inventor Adolphe Quetelet, a Belgian statistician.

It's an inexpensive screening method for categorising an individual's weight from underweight to obese based on their height and weight.

### BAI
BAI stands for body adiposity index. With the term adiposity coming from the Latin adeps, simply meaning fat.

It's an inexpensive method for estimating your amount of body fat by comparing your height and hip circumference.

## How Accurate Are They?
### BMI
Surprisingly, the BMI often inaccurately estimates an individual's body fat. Despite these shortcomings, the BMI is often used because it's inexpensive, easy to use, and provides rough guidance.

### BAI
The BAI experiences similar shortcomings to the BMI, though research has shown its accuracy is more or less unaffected by ethnicity. Moreover, it's not dependent on the quality of weighing scales because it doesn't require weighing individuals, meaning it can be used remotely.

## Shortcomings
### BMI
- The BMI works better on populations rather than individuals. Carl Lavie, an American cardiologist, wrote “BMI tables are excellent for identifying obesity and body fat in large populations, but they are far less reliable for determining fatness in individuals”
- The BMI can misinterpret an individual's healthy weight. This is particularly true for short or tall people as pointed out by Nick Trefethen, an American mathematician, who wrote “BMI divides the weight by too large a number for short people and too small a number for tall people. So short people are misled into thinking that they are thinner than they are, and tall people are misled into thinking they are fatter”
- A 2008 study found that the BMI is [limited in diagnosing obesity](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2877506/#abstract-1title) for people with BMIs in the medium categories
- The BMI doesn't take into account the density differences between muscle and fat, the distribution of fat, nor sex and age
### BAI
- A 2018 study found the BAI [underestimates body fat](https://academic.oup.com/advances/article/9/5/617/5098389#121317705) in individuals with a high body fat percentage and overestimates it in individuals with a low body fat percentage
- A 2013 study found the BAI is [ineffective at evaluating health risks](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0063999#s4) such as high blood pressure or heart failure (and generally metabolic and cardiovascular health risks) in Caucasians, i.e., people of European origin. Using a circumference just above the hips, i.e., the waist, would likely lead to better evaluations
- A 2012 study found that body fat percentage estimates based on the BAI [weren't more accurate](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3477292/#S7title) than those based on the BMI or even simple hip or waist circumference measurements

## Calculations
These calculators use slightly different approaches depending on whether you're using the Metric or Imperial measurement system. You can see how they are calculated by viewing the [Weight Loss Calculator page](https://chrisnewton.dev/weight-loss-calculator).
