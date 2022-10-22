import SkipLink from '../Components/SkipLink.js';
import Sidebar from '../Components/Sidebar.js';
import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';
import CodeLink from '../Components/CodeLink.js';
import BMIMetric from '../Components/BMIMetric.js';
import BMIImperial from '../Components/BMIImperial.js';
import BAIMetric from '../Components/BAIMetric.js';
import BAIImperial from '../Components/BAIImperial.js';

const WeightLossCalculator = () => {

    return (
      <>
        <SkipLink />
        <Sidebar />
        <div id="chris" className="min-h-screen bg-quaternary">
          <Header />
          <main id="main" className="w-10/12 mx-auto pt-[150px] m:pb-20 d:pb-32 text-secondary">
            <article className="contain-width d:grid d:[grid-template-areas:'links']">
              <header>
                <h1 className="mt-6 m:text-4xl d:text-5xl font-bold">Weight Loss Calculator</h1>
              </header>
              <p className="py-4 text-xl">A Body Adiposity Index (BAI) and Body Mass Index (BMI) calculator for estimating whether you're in your healthy weight range.</p>
              <div id="calculator" className="m:w-full d:w-1/2 p-4 mt-4 border-2 border-secondary rounded grid grid-cols-1 justify-between">
                <fieldset className="p-0 m-0 grid gap-y-5 border-none">
                  <div className="relative w-full">
                    <select id="calculator-select" className="w-full h-9 pl-4 pr-11 rounded bg-secondary text-white appearance-none [outline-style:none] cursor-pointer" name="calculator-choice">
                      <option value="BAI Calculator" selected={true}>BAI Calculator</option>
                      <option value="BMI Calculator">BMI Calculator</option>
                    </select>
                    <span className="before:content-[''] before:absolute before:top-1 before:w-0 before:h-0 before:border-[6px] before:border-x-transparent before:border-t-transparent before:border-b-quaternary after:content-[''] after:absolute after:bottom-1 after:w-0 after:h-0 after:border-[6px] after:border-x-transparent after:border-b-transparent after:border-t-quaternary absolute right-0 top-0 w-9 h-9 rounded flex justify-center pointer-events-none shadow-[inset_1px_1px_1px_0_rgb(255_249_240/50%),_inset_2px_-2px_2px_0_rgb(255_249_240/50%)]"></span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-4">Imperial</span>
                    <input id="calculator-measurement" className="peer w-0 h-0 invisible" name="measurement" type="checkbox"></input>
                    <label htmlFor="calculator-measurement" className="peer-active:after:w-11 peer-checked:after:[transform:translate(-100%,50%)] peer-checked:after:left-[calc(100%_-_2px)] peer-checked:bg-tertiary after:content-[''] after:absolute after:bottom-1/2 after:[transform:translate(0%,50%)] after:left-0.5 after:w-7 after:h-7 after:rounded-full after:bg-secondary after:[transition-property:width,_left,_transform] after:duration-300 relative w-[68px] h-9 border-2 border-secondary rounded-full block bg-white -indent-[9999px] [transition-property:background-color] duration-500 cursor-pointer">Toggle</label>
                    <span className="ml-4">Metric</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-4">Female</span>
                    <input id="calculator-gender" className="peer w-0 h-0 invisible" name="gender" type="checkbox"></input>
                    <label htmlFor="calculator-gender" className="peer-active:after:w-11 peer-checked:after:[transform:translate(-100%,50%)] peer-checked:after:left-[calc(100%_-_2px)] peer-checked:bg-tertiary after:content-[''] after:absolute after:bottom-1/2 after:[transform:translate(0%,50%)] after:left-0.5 after:w-7 after:h-7 after:rounded-full after:bg-secondary after:[transition-property:width,_left,_transform] after:duration-300 relative w-[68px] h-9 border-2 border-secondary rounded-full block bg-white -indent-[9999px] [transition-property:background-color] duration-500 cursor-pointer">Toggle</label>
                    <span className="ml-4">Male</span>
                  </div>
                  <label id="weight-label" className="flex items-center">
                      <span id="calculator-1-text-a">Hip circumference:</span>&nbsp;
                      <input id="calculator-1-input" className="focus:bg-tertiary w-16 h-9 ml-[13px] pl-3.5 border-2 border-secondary rounded [outline-style:none] appearance-none" max="999" min="0" defaultValue="35" size="15" type="number"></input>
                      <span id="calculator-1-text-b">&nbsp;in</span>
                  </label>
                  <div className="flex">
                    <label className="mr-4 flex items-center">
                      Height:&nbsp;
                      <input id="calculator-2-input-a" className="focus:bg-tertiary w-16 h-9 ml-4 pl-3.5 border-2 border-secondary rounded [outline-style:none] appearance-none" max="10" min="1" defaultValue="5" size="15" type="number"></input>
                      <span id="calculator-2-text-a">&nbsp;ft</span>
                    </label>
                    <label className="flex items-center f17">
                      <input id="calculator-2-input-b" className="focus:bg-tertiary w-16 h-9 pl-3.5 border-2 border-secondary rounded [outline-style:none] appearance-none" max="12" min="0" defaultValue="5" size="15" type="number"></input>
                      <span id="calculator-2-text-b">&nbsp;in</span>
                    </label>
                  </div>
                  <label id="age-container" className="mr-4 flex items-center">
                    Age:&nbsp;
                    <input id="calculator-3-input" className="focus:bg-tertiary w-16 h-9 ml-9 pl-3.5 border-2 border-secondary rounded [outline-style:none] appearance-none" max="79" min="20" defaultValue="40" size="15" type="number"></input>
                    <span id="calculator-3-text">&nbsp;years old</span>
                  </label>
                  </fieldset>
                  <button id="submit-button" className="h-9 mt-6 rounded bg-secondary text-white">Calculate BAI</button>
                  <output id="weight-results" className="mt-8 p-4 flex items-center justify-center bg-white border-2 border-secondary rounded">Your result is…</output>
              </div>
              <aside className="m:w-full d:w-fit m:mt-10 d:my-4 rounded m:grid m:[grid-template-areas:'.''.''back'] d:[grid-area:links] bg-secondary text-white text-l">
                <CodeLink
                  codeLinkClassName="px-4 py-3 d:border-r-2 d:border-r-[#5d4034] m:[grid-area:back] inline-flex items-center justify-between hover:rounded hover:bg-[#7d5a49] hover:[box-shadow:3px_3px_10px_1px_rgb(0_0_0/24%)]"
                  codeLinkHref="/#main"
                  codeLinkRel="home"
                  codeLinkTarget="_self"
                  codeLinkText="Go back"
                  svgClassName="ml-4"
                  svgTitle="Return to the projects page"
                  pathFill="#fff"
                  pathD="M11 21h8v-2l1-1v4h-9v2L1 21V3l10-3v2h9v5l-1-1V3h-8v18zm10-9-3.2-3.3.7-.7 4.5 4.5-4.5 4.5-.7-.7L21 13h-9v-1h9z"
                />
                <CodeLink
                  codeLinkClassName="px-4 py-3 m:border-b-2 m:border-b-[#5d4034] d:border-r-2 d:border-r-[#5d4034] inline-flex items-center justify-between hover:rounded hover:bg-[#7d5a49] hover:[box-shadow:3px_3px_10px_1px_rgb(0_0_0/24%)]"
                  codeLinkHref="https://github.com/ChrisJohnNewton/weight-loss-calculators.git"
                  codeLinkRel="external"
                  codeLinkTarget="_blank"
                  codeLinkText="See repo"
                  svgClassName="ml-4"
                  svgTitle="View the project's repository"
                  pathFill="#fff"
                  pathD="M15 16H9v-2h6v2zm9-8v2H0V8l4.5-8h15L24 8zm-2.3 0-3.3-6H5.7L2.3 8h19.4zM21 22H3V12H1v12h22V12h-2v10z"
                />
                <CodeLink
                  codeLinkClassName="px-4 py-3 m:border-b-2 m:border-b-[#5d4034] inline-flex items-center justify-between hover:rounded hover:bg-[#7d5a49] hover:[box-shadow:3px_3px_10px_1px_rgb(0_0_0/24%)]"
                  codeLinkHref="https://github.com/ChrisJohnNewton/weight-loss-calculators/blob/main/weight-loss-calculators.js"
                  codeLinkRel="external"
                  codeLinkTarget="_blank"
                  codeLinkText="See source code"
                  svgClassName="ml-4"
                  svgTitle="View the project's source code"
                  pathFill="#fff"
                  pathD="M16 3h-1L8 21h1l7-18zm0 4 6 5-6 5 1 1 7-6-7-6-1 1zM8 7l-6 5 6 5-1 1-7-6 7-6 1 1z"
                />
              </aside>
              <aside className="m:mt-4">
                <section className="m:pt-6 d:pt-12">
                  <header>
                    <h2 className="contain-width m:text-3xl d:text-4xl font-bold">What Are BMI and BAI?</h2>
                  </header>
                  <section className="contain-width m:pt-2 d:pt-4">
                    <header>
                      <h3 className="m:text-2xl d:text-3xl font-bold">BMI</h3>
                    </header>
                    <p className="contain-width pt-4 text-xl">BMI stands for body mass index but was formerly called the <cite>Quetelet index</cite> after its inventor Adolphe Quetelet, a Belgian statistician.</p>
                    <p className="contain-width pt-4 text-xl">It's an inexpensive screening method for categorising an individual's weight from underweight to obese based on their height and weight.</p>
                  </section>
                  <section className="contain-width m:pt-2 d:pt-4">
                    <header>
                      <h3 className="m:text-2xl d:text-3xl font-bold">BAI</h3>
                    </header>
                    <p className="contain-width pt-4 text-xl">BAI stands for body adiposity index. With the term <q>adiposity</q> coming from the Latin <q>adeps</q>, simply meaning <q cite="https://www.etymonline.com/word/adipose">fat</q>.</p>
                    <p className="contain-width pt-4 text-xl">It's an inexpensive method for estimating your amount of body fat by comparing your height and hip circumference.</p>
                  </section>
                </section>
                <section className="m:pt-6 d:pt-12">
                  <header>
                    <h2 className="contain-width m:text-3xl d:text-4xl font-bold">How Accurate Are They?</h2>
                  </header>
                  <section className="contain-width m:pt-2 d:pt-4">
                    <header>
                      <h3 className="m:text-2xl d:text-3xl font-bold">BMI</h3>
                    </header>
                    <p className="contain-width pt-4 text-xl">Surprisingly, the BMI often inaccurately estimates an individual's body fat. <a href="#shortcomings">Despite these shortcomings</a>, the BMI is often used because it's inexpensive, easy to use, and provides rough guidance.</p>
                  </section>
                  <section className="contain-width m:pt-2 d:pt-4">
                    <header>
                      <h3 className="m:text-2xl d:text-3xl font-bold">BAI</h3>
                    </header>
                    <p className="contain-width pt-4 text-xl">The BAI experiences similar shortcomings to the BMI, though research has shown its accuracy is more or less unaffected by ethnicity. Moreover, it's not dependent on the quality of weighing scales because it doesn't require weighing individuals, meaning it can be used remotely.</p>
                  </section>
                </section>
                <section className="m:pt-6 d:pt-12">
                  <header>
                    <h2 id="shortcomings" className="contain-width m:text-3xl d:text-4xl font-bold">Shortcomings</h2>
                  </header>
                  <section className="contain-width m:pt-2 d:pt-4">
                    <header>
                      <h3 className="m:text-2xl d:text-3xl font-bold">BMI</h3>
                    </header>
                    <ol className="contain-width pt-4 pl-4 text-xl list-disc">
                      <li className="mb-4">The BMI works better on populations rather than individuals. Carl Lavie, an American cardiologist, wrote <q>BMI tables are excellent for identifying obesity and body fat in large populations, but they are far less reliable for determining fatness in individuals</q></li>
                      <li className="mb-4">The BMI can misinterpret an individual's healthy weight. This is particularly true for short or tall people as pointed out by Nick Trefethen, an American mathematician, who wrote <q>BMI divides the weight by too large a number for short people and too small a number for tall people. So short people are misled into thinking that they are thinner than they are, and tall people are misled into thinking they are fatter</q></li>
                      <li className="mb-4">A 2008 study found that the BMI is <a className="external" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2877506/#abstract-1title" rel="external" target="_blank">limited in diagnosing obesity</a> for people with BMIs in the medium categories</li>
                      <li className="mb-4">The BMI doesn't take into account the density differences between muscle and fat, the distribution of fat, nor sex and age</li>
                    </ol>
                  </section>
                  <section className="contain-width m:pt-2 d:pt-4">
                    <header>
                      <h3 className="m:text-2xl d:text-3xl font-bold">BAI</h3>
                    </header>
                    <ol className="contain-width pt-4 pl-4 text-xl list-disc">
                      <li className="mb-4">A 2018 study found the BAI <a className="external" href="https://academic.oup.com/advances/article/9/5/617/5098389#121317705" rel="external" target="_blank">underestimates body fat</a> in individuals with a high body fat percentage and overestimates it in individuals with a low body fat percentage</li>
                      <li className="mb-4">A 2013 study found the BAI is <a className="external" href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0063999#s4" rel="external" target="_blank">ineffective at evaluating health risks</a> such as high blood pressure or heart failure (and generally metabolic and cardiovascular health risks) in Caucasians, i.e., people of European origin. Using a circumference just above the hips, i.e., the waist, would likely lead to better evaluations</li>
                      <li className="mb-4">A 2012 study found that body fat percentage estimates based on the BAI <a className="external" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3477292/#S7title" rel="external" target="_blank">weren't more accurate</a> than those based on the BMI or even simple hip or waist circumference measurements</li>
                    </ol>
                  </section>
                </section>
                <section className="m:pt-6 d:pt-12">
                  <header>
                    <h2 className="contain-width m:text-3xl d:text-4xl font-bold">Calculations</h2>
                  </header>
                  <p className="contain-width pt-4 text-xl">These calculators use slightly different approaches depending on whether you're using the Metric or Imperial measurement system.</p>
                  <section className="contain-width m:pt-2 d:pt-4">
                    <header>
                      <h3 className="m:text-2xl d:text-3xl font-bold">BMI</h3>
                    </header>
                    <BMIMetric figureClassName="relative d:w-fit my-8 p-4 rounded bg-secondary" svgClassName="m:w-full d:w-[600px]" pathFill="#fff" figCaptionClassName="absolute bottom-0 right-0 px-1 rounded-tl-sm bg-white text-secondary" />
                    <BMIImperial figureClassName="relative d:w-fit my-8 p-4 rounded bg-secondary" svgClassName="m:w-full d:w-[600px]" pathFill="#fff" figCaptionClassName="absolute bottom-0 right-0 px-1 rounded-tl-sm bg-white text-secondary" />
                  </section>
                  <section className="contain-width m:pt-2 d:pt-4">
                    <header>
                      <h3 className="m:text-2xl d:text-3xl font-bold">BAI</h3>
                    </header>
                    <BAIMetric figureClassName="relative d:w-fit my-8 p-4 rounded bg-secondary" svgClassName="m:w-full d:w-[600px]" pathFill="#fff" figCaptionClassName="absolute bottom-0 right-0 px-1 rounded-tl-sm bg-white text-secondary" />
                    <BAIImperial figureClassName="relative d:w-fit my-8 px-4 pt-4 m:pb-6 d:pb-4 rounded bg-secondary" svgClassName="m:w-full d:w-[600px]" pathFill="#fff" figCaptionClassName="absolute bottom-0 right-0 px-1 rounded-tl-sm bg-white text-secondary" />
                  </section>
                </section>
              </aside>
            </article>
          </main>
          <Footer />
        </div>
      </>
    );

};

const canonicalURL = `<link rel="canonical" href="https://chrisnewton.dev/weight-loss-calculator"/>`;
const title = `<title>Weight Loss Calculator | Chris Newton — Web Developer</title>`;
const description = `<meta name="description" content="A BMI and BAI calculator for estimating healthy weight ranges."/>`;
const JSON = ``;
const extraAMPScripts = ``;

export default { WeightLossCalculator, Head: { canonicalURL, description, title, JSON, extraAMPScripts } };
