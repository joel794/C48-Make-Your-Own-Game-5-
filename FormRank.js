class FormRanK {

  constructor() {
    
    this.button = createButton('OK');
   
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Congratulations");
    this.title.position(400, 400);

    
    this.button.position(200, 200);

    this.greeting.html("RANK "+ player.rank)
      this.greeting.position(120,120);
    

    this.button.mousePressed(()=>{
    
      FormRank.hide();
        
    });

  }
}
