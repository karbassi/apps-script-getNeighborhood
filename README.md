# Google Sheets: Get Neighborhood from Address or Query

If you need you get the neighborhood based an address or location name, it's pretty easy using Google App Scripts and the [HERE API](https://developer.here.com/documentation). You'll need to supply your own HERE API key. They have a [freemium model](https://developer.here.com/pricing) that is pretty generious (_250k transactions per month_).

**First**, in your Google Spreadsheet, create an "Apps Script". As of 2021, you can do this by going to `Extentions` > `Apps Script`. Ths will open a new Apps Script file.

Inside the Apps Script site, rename the project to `getNeighborhood` and paste the [following code](./getNeighborhood.gs) inside `Code.gs`.

Be sure to save and click `Debug`. Confirm permissions once they pop up and you're set.

**Back inside your spreadsheet**, you can use the new function like so:

```js
=getNeighborhood("312 W Adams St, Chicago")
```

```js
=getNeighborhood("Sears Tower, Chicago")
```

```js
=getNeighborhood(A2)
```

