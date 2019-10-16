# toy-robot
This is a demo of a Toy Robot simulation on 5 x 5 terrain.  
Very is to use and made just for fun.  

### Installation
1. git clone
2. npm install
3. npm start    

That's it!

### How to use
Just input your toy robot position axis. Starting axis origin point is the top left (0,0) 
X: range 0 - 4. Only number values are allow. Any number out of range is been ignored   
Y: range 0 - 4. Only number values are allow. Any number out of range is been ignored   
F: Facing is the direction the Toy Robot is facing. Valid input values  
* N = North
* E = East
* S = South
* W = West  

Any other input will be ignored.

### Application flow
Start by inputting your Toy Robot's initial X, Y position and where it is Facing.  
Press Place button to place your Toy Robot on the terrain.
You can move your robot by one tile each time at the direction that your robot is facing.  
You can also rotate your robot left and right.
Finally you can press the Report button in order to be informed regarding the position 
and the direction your robot is facing.

Any position out of the terrain will be ignore, as any invalid move.
Your toy Robot will respond to your commands by it is clever enough not to fall off the terrain.

Enjoy!!!!   

![ScreenShoot](https://github.com/a-than/toy-robot/blob/master/screenshot.png)



