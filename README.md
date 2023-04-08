# VAK Categorization 

## How it Works ?

This is an interface that classifies students into 3 different learning modes :  visual (V), aural (A) and kinesthetic (K). </br>
The user would first have to take the quiz on this interface and then his/her answers are saved and sent through the model. </br>
The model then classifies what kind of learning best suits the user and the corresponding resources are now visible to the user. </br>

## Steps to be followed : 
1. Clone the repo.
2. Open with VS code.
3. Run "npm start".
4. Take the quiz.
5. When clicked on SUBMIT, asks you to download a CSV file, approve.
6. Run your ML model (notebook file) and the corresponding output is printed.
7. To access the Aural site manually : localhost:3000/audio
   To access the Visual site manually : localhost:3000/visual
   To access the Kinesthetic site manually : localhost:3000/kinesthetic
   
## Improvements : 
In the process of using FLASK to connect the front end with the ML notebook file for smoother functioning.
