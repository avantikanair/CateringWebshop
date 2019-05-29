// Initialise the dishArray array
var dishArray = []
dishArray.push(new Dishes("./dish1.jpg", "Channa Masala", "Chickpea cooked in a tangy curry of roasted spices", "200", "001"))
dishArray.push(new Dishes("./dish2.jpg", "Dal Makhani", "Lentils cooked overnight on slow flame with spices and finished with cream and butter", "200", "002"))
dishArray.push(new Dishes("./dish3.jpg", "Murg Masala", "Chicken cooked in traditional brown gravy thickened with egg, flavoured with condiments", "340", "003"))
dishArray.push(new Dishes("./dish4.jpg", "Sarson Ka Saag", "Winter staple- Mustard greens cooked with spices ", "280", "004"))
dishArray.push(new Dishes("./dish5.jpg", "Prawn Masala", "Prawns tossed in Ginger and Garlic, cooked in five spices ", "420", "005"))
dishArray.push(new Dishes("./dish6.jpg", "Kerala Beef Fry", "Beef cooked with spices, coconut slices and curry leaves", "300", "006"))
dishArray.push(new Dishes("./dish7.jpg", "Malabar Crab curry", "Crab cooked in coconut milk, curry leaves and spices", "480", "007"))
dishArray.push(new Dishes("./dish8.jpg", "Chicken 65", "Chicken cooked with 65 different spices", "350", "007"))
dishArray.push(new Dishes("./dish9.jpg", "Hari Bari Makai Seekh", "Minced mixed vegetables with corn and exotic herbs barbecued in clay oven", "220", "007"))
dishArray.push(new Dishes("./dish10.jpg", "Paneer Tikka", "Chunks of cottage cheese marinated in yoghurt, ground spices, glazed in tandoor", "290", "007"))
dishArray.push(new Dishes("./menu1.jpg", "Vegetarian Menu - for 10 people", "Channa Masala, Dal Makhni, Sarson Ka Saag, Naan bread, Chapatti", "1800", "008"))
dishArray.push(new Dishes("./menu2.jpg", "Seafood Menu – for 10 people", "Prawn Masala, Malabar Crab Curry, Parotta, Rice", "3000", "009"))
dishArray.push(new Dishes("./menu3.jpg", "Mixed Menu – for 10 people", "Hari Bari Makai Seekh, Paneer Tikka, Murg Masala, Naan, Parotta", "2600", "010"))


console.log(dishArray)


// print table of dish
//??? whats happening here? 
htmlString = ""

for (i = 0; i < dishArray.length; i++) {
        htmlString += dishArray[i].createTableRows()
}

var table = document.getElementById("table")
var tbody = table.getElementsByTagName("tbody")

tbody[0].innerHTML += htmlString