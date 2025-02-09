# Excel

## Copying Range of Formulas

When you copy a range, their values is copied by default and it's not possible to past the formulas outside of Excel. To copy the formulas, you can use the following steps, inspired by [this video](https://youtu.be/zWhGVZ-R-6g?si=G25NXLmJX4DHI51e&t=180). The idea is to replace the `=` sign in the cells with something else and then copy the range. The replacement keyword should be something that doesn't exist in the formulas, like `areplacementofthesigntogettheformulacopied`.

1. Select the range you want to copy
1. Press `Ctrl + H` to replace `=` with `areplacementofthesigntogettheformulacopied`
1. Copy the range
1. Paste the range outside of Excel
1. Replace `areplacementofthesigntogettheformulacopied` with `=` to get the formulas back
