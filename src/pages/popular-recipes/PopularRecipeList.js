const popularDrinks = [
  {
    title: 'Margarita',
    description:
      'A classic cocktail featuring the tangy flavors of tequila, lime juice, and orange liqueur, served in a salt-rimmed glass for a perfect balance of sweet and sour.',
    recipe:
      '- 2 oz Tequila - 1 oz Triple Sec - 1 oz Lime Juice - Salt for rimming Instructions: 1. Rub the rim of a glass with lime juice, then dip it into salt to rim the glass. 2. Fill a shaker with ice. 3. Add tequila, triple sec, and lime juice to the shaker. 4. Shake well until chilled. 5. Strain into the prepared glass filled with ice. 6. Garnish with a lime wedge. 7. Enjoy the classic Margarita, a refreshing blend of citrus and tequila!',
  },
  {
    title: 'Martini',
    description:
      'An iconic cocktail known for its elegance and simplicity, the Martini combines gin or vodka with dry vermouth for a sophisticated and timeless drink.',
    recipe:
      '- 2 1/2 oz Gin or Vodka - 1/2 oz Dry Vermouth Instructions: 1. Fill a mixing glass with ice. 2. Add gin or vodka and dry vermouth to the mixing glass. 3. Stir well until chilled. 4. Strain into a chilled martini glass. 5. Garnish with an olive or lemon twist. 6. Enjoy the classic Martini, a symbol of refinement and sophistication!',
  },
  {
    title: 'Old Fashioned',
    description:
      'A timeless cocktail that dates back to the 19th century, the Old Fashioned is a simple yet elegant blend of whiskey, sugar, and bitters, garnished with a twist of citrus.',
    recipe:
      '- 2 oz Whiskey - 1 Sugar Cube (or 1/2 oz Simple Syrup) - 2-3 dashes Angostura Bitters - Orange Peel Instructions: 1. Place the sugar cube in an old-fashioned glass. 2. Add bitters and a splash of water. Muddle until the sugar is dissolved. 3. Fill the glass with ice cubes. 4. Pour whiskey over the ice. 5. Stir gently to combine. 6. Garnish with an orange peel. 7. Enjoy the classic Old Fashioned, a timeless favorite among cocktail connoisseurs!',
  },
  {
    title: 'Cosmopolitan',
    description:
      "Made famous by the TV show 'Sex and the City,' the Cosmopolitan is a stylish and sophisticated cocktail that combines vodka, cranberry juice, triple sec, and lime juice for a refreshing and tangy flavor.",
    recipe:
      '- 1 1/2 oz Vodka - 1/2 oz Triple Sec - 1/2 oz Lime Juice - 1 oz Cranberry Juice Instructions: 1. Fill a shaker with ice. 2. Add vodka, triple sec, lime juice, and cranberry juice to the shaker. 3. Shake well until chilled. 4. Strain into a chilled martini glass. 5. Garnish with a lime twist. 6. Enjoy the Cosmopolitan, a drink that exudes style and sophistication!',
  },
  {
    title: 'Moscow Mule',
    description:
      'A trendy and refreshing cocktail served in a copper mug, the Moscow Mule features vodka, ginger beer, and lime juice for a zesty and effervescent flavor.',
    recipe:
      '- 2 oz Vodka - 1/2 oz Lime Juice - Ginger Beer Instructions: 1. Fill a copper mug with ice. 2. Add vodka and lime juice to the mug. 3. Top off with ginger beer. 4. Stir gently to combine. 5. Garnish with a lime wedge. 6. Enjoy the Moscow Mule, a cool and refreshing cocktail!',
  },
  {
    title: 'Piña Colada',
    description:
      'Transport yourself to a tropical paradise with the Piña Colada, a creamy and refreshing cocktail made with rum, coconut cream, and pineapple juice, garnished with a pineapple wedge and maraschino cherry.',
    recipe:
      '- 2 oz White Rum - 2 oz Pineapple Juice - 1 oz Coconut Cream - Pineapple Wedge and Maraschino Cherry for garnish Instructions: 1. Fill a blender with ice. 2. Add rum, pineapple juice, and coconut cream to the blender. 3. Blend until smooth and creamy. 4. Pour into a chilled glass. 5. Garnish with a pineapple wedge and maraschino cherry. 6. Enjoy the Piña Colada, a taste of the tropics in every sip!',
  },
  {
    title: 'Mojito',
    description:
      'A Cuban classic, the Mojito is a refreshing and minty cocktail made with white rum, fresh mint leaves, lime juice, sugar, and soda water, served over ice for a cool and invigorating drink.',
    recipe:
      '- 2 oz White Rum - 1/2 oz Lime Juice - 2 tsp Sugar - 6-8 Fresh Mint Leaves - Soda Water Instructions: 1. Muddle mint leaves and sugar in the bottom of a glass. 2. Fill the glass with ice. 3. Add rum and lime juice. 4. Top off with soda water. 5. Stir gently to combine. 6. Garnish with a sprig of mint and a lime wedge. 7. Enjoy the Mojito, a refreshing cocktail with a burst of minty flavor!',
  },
  {
    title: 'Bloody Mary',
    description:
      'A savory and spicy cocktail perfect for brunch, the Bloody Mary combines vodka with tomato juice, Worcestershire sauce, hot sauce, and various spices, garnished with celery, olives, and a lime wedge.',
    recipe:
      "- 1 1/2 oz Vodka - 3 oz Tomato Juice - 1/2 oz Lemon Juice - 1/2 tsp Worcestershire Sauce - 2-3 dashes Tabasco Sauce - Pinch of Salt and Pepper - Celery Salt (for rimming, optional) - Celery Stalk, Olives, and Lime Wedge for garnish Instructions: 1. Rim a glass with celery salt (optional). 2. Fill the glass with ice. 3. Add vodka, tomato juice, lemon juice, Worcestershire sauce, Tabasco sauce, salt, and pepper to the glass. 4. Stir well to combine. 5. Garnish with a celery stalk, olives, and a lime wedge. 6. Enjoy the Bloody Mary, a spicy and savory cocktail that's perfect for any occasion!",
  },
  {
    title: 'Whiskey Sour',
    description:
      'A classic cocktail with a perfect balance of sweet, sour, and whiskey flavors, the Whiskey Sour is made with bourbon, lemon juice, and simple syrup, garnished with a cherry and orange slice.',
    recipe:
      '- 2 oz Bourbon - 3/4 oz Lemon Juice - 1/2 oz Simple Syrup - Cherry and Orange Slice for garnish Instructions: 1. Fill a shaker with ice. 2. Add bourbon, lemon juice, and simple syrup to the shaker. 3. Shake well until chilled. 4. Strain into a glass filled with ice. 5. Garnish with a cherry and orange slice. 6. Enjoy the Whiskey Sour, a timeless cocktail with a perfect balance of flavors!',
  },
  {
    title: 'White Russian',
    description:
      "Made famous by the movie 'The Big Lebowski,' the White Russian is a creamy and decadent cocktail featuring vodka, coffee liqueur, and cream, served over ice for a rich and indulgent drink.",
    recipe:
      "- 2 oz Vodka - 1 oz Coffee Liqueur - 1 oz Heavy Cream - Ice Instructions: 1. Fill a glass with ice. 2. Add vodka and coffee liqueur to the glass. 3. Top off with heavy cream. 4. Stir gently to combine. 5. Enjoy the White Russian, a creamy and indulgent cocktail that's sure to satisfy your sweet tooth!",
  },
];

export default popularDrinks;
