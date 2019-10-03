var isInit = 0;
var stage = null;
var mainlayer = null;
var ShowCards = 0;
var WinCount = 0;
var LoseCount = 0;
var	C = [0,1,2,3];
var Cards = [null,null,null];
var Blanks = [null,null,null];
var Difficulty = 0;
var isTweening = 0;

function init()
{
	if(isInit==0)
	{
		stage = new Kinetic.Stage({
			container:'MrStage',
			width:550,
			height:400
		});

		mainlayer = new Kinetic.Layer();
		backlayer = new Kinetic.Layer();

		BG = new Kinetic.Rect({
			x:0,
			y:0,
			width:550,
			height:400,
			fill:'#14682A'
		});
		backlayer.add(BG);
		stage.add(backlayer);

		group = new Kinetic.Group({
			x:0,
			y:125,
			height:150,
			width:550
		});

		group.on('click',function(){
			Difficulty = 1;
			G = stage.get('Group');
			H = G.length;
			for(i=0;i<H;i++)
			{
				G[i].destroy();
			}
			stage.draw();
			
			createGame();
		});

		rect = new Kinetic.Rect({
			x:0,
			y:0,
			width:550,
			height:150,
			fill:'yellow',
			stroke:'#000000',
			strokeWidth:4
		});

		PlayText = new Kinetic.Text({
			x:25,
			y:35,
			text:'Normal',
			fontSize:80,
			fontFamily:'Comic Sans MS',
			fill:'#000000'
		});
		
		circle = new Kinetic.Circle({
			x:450,
			y:75,
			radius:30,
			fill:'yellow',
			stroke:'black',
			strokeWidth:4
		});
		
		line = new Kinetic.Line({
			points:[425,75,450,100,510,35],
			stroke:'black',
			strokeWidth:5,
			lineCap:'round',
			lineJoin:'round'
		});

		group.add(rect);
		group.add(PlayText);
		group.add(circle);
		group.add(line);
		
		group2 = new Kinetic.Group({
			x:0,
			y:0,
			height:150,
			width:550
		});
		
		group2.on('click',function(){
			Difficulty = 0;
			G = stage.get('Group');
			H = G.length;
			for(i=0;i<H;i++)
			{
				G[i].destroy();
			}
			stage.draw();
			
			createGame();
		});
		
		rect2 = new Kinetic.Rect({
			x:0,
			y:0,
			width:550,
			height:125,
			fill:'green',
			stroke:'#000000',
			strokeWidth:4
		});
		
		PlayText2 = new Kinetic.Text({
			x:25,
			y:35,
			text:'Easy',
			fontSize:80,
			fontFamily:'Comic Sans MS',
			fill:'#000000'
		});
		
		circle2 = new Kinetic.Circle({
			x:450,
			y:75,
			radius:30,
			fill:'green',
			stroke:'black',
			strokeWidth:4
		});
		
		line2 = new Kinetic.Line({
			points:[425,75,450,100,510,35],
			stroke:'black',
			strokeWidth:5,
			lineCap:'round',
			lineJoin:'round'
		});
		
		group2.add(rect2);
		group2.add(PlayText2);
		group2.add(circle2);
		group2.add(line2);
		
		group3 = new Kinetic.Group({
			x:0,
			y:275,
			height:150,
			width:550
		});
		
		group3.on('click',function(){
			Difficulty = 2;
			G = stage.get('Group');
			H = G.length;
			for(i=0;i<H;i++)
			{
				G[i].destroy();
			}
			stage.draw();
			
			createGame();
		});
		
		rect3 = new Kinetic.Rect({
			x:0,
			y:0,
			width:550,
			height:125,
			fill:'red',
			stroke:'#000000',
			strokeWidth:4
		});
		
		PlayText3 = new Kinetic.Text({
			x:25,
			y:35,
			text:'Hard',
			fontSize:80,
			fontFamily:'Comic Sans MS',
			fill:'#000000'
		});
		
		circle3 = new Kinetic.Circle({
			x:450,
			y:75,
			radius:30,
			fill:'red',
			stroke:'black',
			strokeWidth:4
		});
		
		line3 = new Kinetic.Line({
			points:[425,75,450,100,510,35],
			stroke:'black',
			strokeWidth:5,
			lineCap:'round',
			lineJoin:'round'
		});
		
		group3.add(rect3);
		group3.add(PlayText3);
		group3.add(circle3);
		group3.add(line3);
		
		mainlayer.add(group);
		mainlayer.add(group2);
		mainlayer.add(group3);
		stage.add(mainlayer);

		isInit=1;
	}
}

function makeCard(F,XX,YY)
{
	if(F==0)
	{
		CardValue="A";
		CardColour="#000000";
		CardFill="#FFFFFF";
		FontSize=40;
	}
	else if(F==1)
	{
		CardValue="K";
		CardColour="#FF0000";
		CardFill="#FFFFFF";
		FontSize=40;
	}
	else if(F==2)
	{
		CardValue="Q";
		CardColour="#FF0000";
		CardFill="#FFFFFF";
		FontSize=40;
	}
	else if(F==3)
	{
		CardValue="J";
		CardColour="#FF0000";
		CardFill="#FFFFFF";
		FontSize=40;
	}
	else if(F==4)
	{
		CardValue="Example";
		CardColour="#FFFFFF";
		CardFill="#010080";
		FontSize=10;
	}
	
	group = new Kinetic.Group({
		x:XX,
		y:YY,
		height:100,
		width:66,
		TS:new Date().getTime(),
		id:'TCM-Card'
	});
	
	card = new Kinetic.Rect({
		x:0,
		y:0,
		width:66,
		height:100,
		fill:CardFill,
		stroke:'#000000',
		strokeWidth:1,
		cornerRadius:9
	});
	
	cardtext = new Kinetic.Text({
		x:5,
		y:5,
		text:CardValue,
		fontSize:FontSize,
		fontFamily:'Calibri',
		fill:CardColour
	});
	
	cardtext2 = new Kinetic.Text({
		x:61,
		y:96,
		text:CardValue,
		fontSize:FontSize,
		fontFamily:'Calibri',
		fill:CardColour,
		rotationDeg:180
	});
	
	group.add(card);
	group.add(cardtext);
	group.add(cardtext2);
	
	return group;
}

function createGame()
{
	ShowCards=0;
	C.sort(function(){return 0.5-Math.random()});
	DoIt=1;
	
	while(DoIt==1)
	{
		if((C[0]==0)||(C[1]==0)||(C[2]==0))
		{
			DoIt=0;
		}
		else
		{
			C.sort(function(){return 0.5-Math.random()});
		}
	}
	
	for(i=0;i<3;i++)
	{
		Blanks[i]=makeCard(4,(120*(i+1)),150);
		mainlayer.add(Blanks[i]);
		ShowCards++;
	}
	
	stage.draw();
	
	setTimeout(flipCardsOver,500);
}

function flipCardsOver()
{
	G=stage.get('Group');
	H=G.length;
	Tweens=[];
	for(i=0;i<H;i++)
	{
		Tweens[i]=new Kinetic.Tween({
			node:G[i], 
			duration:0.1,
			scaleX:0.00001,
			onFinish:function(){
				this.node.destroy();
				stage.draw();
				ShowCards--;
				if(ShowCards<=0)
				{
					showCardValues();
					this.destroy();
				}
			}
		});
		Tweens[i].play()
	}
}

function showCardValues()
{
	for(i=0;i<3;i++)
	{
		Cards[i]=makeCard(C[i],(120*(i+1)),150);
		mainlayer.add(Cards[i]);
		ShowCards++;
	}
	
	stage.draw();
	
	setTimeout(flipCardsOver2,2000);
}

function flipCardsOver2()
{
	G=stage.get('Group');
	H=G.length;
	Tweens=[];
	for(i=0;i<H;i++)
	{
		Tweens[i]=new Kinetic.Tween({
			node:G[i], 
			duration:0.1,
			scaleX:0.00001,
			onFinish:function(){
				this.node.destroy();
				stage.draw();
				ShowCards--;
				if(ShowCards<=0)
				{
					spinCards();
					this.destroy();
				}
			}
		});
		Tweens[i].play();
	}
}

function spinCards()
{
	for(i=0;i<3;i++)
	{
		Blanks[i]=makeCard(4,(120*(i+1)),150);
		mainlayer.add(Blanks[i]);
		ShowCards++;
	}
	
	stage.draw();
	
	//Easy. No Shuffling
	if(Difficulty == 0)
	{
		setTimeout(function(){
			/*group = new Kinetic.Group({
				x:0,
				y:0,
				height:150,
				width:550,
				id:'SelectButton'
			});
			
			SelectRect = new Kinetic.Rect({
				x:0,
				y:0,
				width:550,
				height:98,
				fill:'yellow',
				stroke:'#000000',
				strokeWidth:4
			});
			
			SelectText = new Kinetic.Text({
				x:125,
				y:10,
				text:'SELECT',
				fontSize:80,
				fontFamily:'Comic Sans MS',
				fill:'#000000'
			});
			
			group.add(SelectRect);
			group.add(SelectText);
			mainlayer.add(group);
			stage.draw();*/
			
			Blanks[0].on('click',function(){
				if(isTweening==0)
				{
					flipCardsOver3(0);
				}
			});
			Blanks[1].on('click',function(){
				if(isTweening==0)
				{	
					flipCardsOver3(1);
				}
			});
			Blanks[2].on('click',function(){
				if(isTweening==0)
				{
					flipCardsOver3(2);
				}
			});
		},100);
	}
	//Normal. Some Shuffling
	else if(Difficulty == 1)
	{
		BX0=Blanks[0].getX();
		BX1=Blanks[1].getX();
		BX2=Blanks[2].getX();
		BY1=Blanks[0].getY();
		
		R1=Math.floor(Math.random()*3);
		R2=Math.floor(Math.random()*3);
		if((R1==0)&&(R2==0))
		{
			rotateCard(R1);
		}
		else if((R1==0)&&(R2==1))
		{
			swapStraight(R1,R2,BX0,BX1,BY1);
		}
		else if((R1==0)&&(R2==2))
		{
			swapStraight(R1,R2,BX0,BX2,BY1);
		}
		else if((R1==1)&&(R2==0))
		{
			swapStraight(R1,R2,BX1,BX0,BY1);
		}
		else if((R1==1)&&(R2==1))
		{
			rotateCard(R1);
		}
		else if((R1==1)&&(R2==2))
		{
			swapStraight(R1,R2,BX1,BX2,BY1);
		}
		else if((R1==2)&&(R2==0))
		{
			swapStraight(R1,R2,BX2,BX0,BY1);
		}
		else if((R1==2)&&(R2==1))
		{
			swapStraight(R1,R2,BX2,BX1,BY1);
		}
		else if((R1==2)&&(R2==2))
		{
			rotateCard(R1);
		}
		
		setTimeout(function(){
			R1=Math.floor(Math.random()*3);
			R2=Math.floor(Math.random()*3);
			if((R1==0)&&(R2==0))
			{
				rotateCard(R1);
			}
			else if((R1==0)&&(R2==1))
			{
				swapStraight(R1,R2,BX0,BX1,BY1);
			}
			else if((R1==0)&&(R2==2))
			{
				swapStraight(R1,R2,BX0,BX2,BY1);
			}
			else if((R1==1)&&(R2==0))
			{
				swapStraight(R1,R2,BX1,BX0,BY1);
			}
			else if((R1==1)&&(R2==1))
			{
				rotateCard(R1);
			}
			else if((R1==1)&&(R2==2))
			{
				swapStraight(R1,R2,BX1,BX2,BY1);
			}
			else if((R1==2)&&(R2==0))
			{
				swapStraight(R1,R2,BX2,BX0,BY1);
			}
			else if((R1==2)&&(R2==1))
			{
				swapStraight(R1,R2,BX2,BX1,BY1);
			}
			else if((R1==2)&&(R2==2))
			{
				rotateCard(R1);
			}
			
			setTimeout(function(){
				R1=Math.floor(Math.random()*3);
				R2=Math.floor(Math.random()*3);
				if((R1==0)&&(R2==0))
				{
					rotateCard(R1);
				}
				else if((R1==0)&&(R2==1))
				{
					swapStraight(R1,R2,BX0,BX1,BY1);
				}
				else if((R1==0)&&(R2==2))
				{
					swapStraight(R1,R2,BX0,BX2,BY1);
				}
				else if((R1==1)&&(R2==0))
				{
					swapStraight(R1,R2,BX1,BX0,BY1);
				}
				else if((R1==1)&&(R2==1))
				{
					rotateCard(R1);
				}
				else if((R1==1)&&(R2==2))
				{
					swapStraight(R1,R2,BX1,BX2,BY1);
				}
				else if((R1==2)&&(R2==0))
				{
					swapStraight(R1,R2,BX2,BX0,BY1);
				}
				else if((R1==2)&&(R2==1))
				{
					swapStraight(R1,R2,BX2,BX1,BY1);
				}
				else if((R1==2)&&(R2==2))
				{
					rotateCard(R1);
				}
				
				setTimeout(function(){
					R1=Math.floor(Math.random()*3);
					R2=Math.floor(Math.random()*3);
					if((R1==0)&&(R2==0))
					{
						rotateCard(R1);
					}
					else if((R1==0)&&(R2==1))
					{
						swapStraight(R1,R2,BX0,BX1,BY1);
					}
					else if((R1==0)&&(R2==2))
					{
						swapStraight(R1,R2,BX0,BX2,BY1);
					}
					else if((R1==1)&&(R2==0))
					{
						swapStraight(R1,R2,BX1,BX0,BY1);
					}
					else if((R1==1)&&(R2==1))
					{
						rotateCard(R1);
					}
					else if((R1==1)&&(R2==2))
					{
						swapStraight(R1,R2,BX1,BX2,BY1);
					}
					else if((R1==2)&&(R2==0))
					{
						swapStraight(R1,R2,BX2,BX0,BY1);
					}
					else if((R1==2)&&(R2==1))
					{
						swapStraight(R1,R2,BX2,BX1,BY1);
					}
					else if((R1==2)&&(R2==2))
					{
						rotateCard(R1);
					}
					
					setTimeout(function(){
						R1=Math.floor(Math.random()*3);
						R2=Math.floor(Math.random()*3);
						if((R1==0)&&(R2==0))
						{
							rotateCard(R1);
						}
						else if((R1==0)&&(R2==1))
						{
							swapStraight(R1,R2,BX0,BX1,BY1);
						}
						else if((R1==0)&&(R2==2))
						{
							swapStraight(R1,R2,BX0,BX2,BY1);
						}
						else if((R1==1)&&(R2==0))
						{
							swapStraight(R1,R2,BX1,BX0,BY1);
						}
						else if((R1==1)&&(R2==1))
						{
							rotateCard(R1);
						}
						else if((R1==1)&&(R2==2))
						{
							swapStraight(R1,R2,BX1,BX2,BY1);
						}
						else if((R1==2)&&(R2==0))
						{
							swapStraight(R1,R2,BX2,BX0,BY1);
						}
						else if((R1==2)&&(R2==1))
						{
							swapStraight(R1,R2,BX2,BX1,BY1);
						}
						else if((R1==2)&&(R2==2))
						{
							rotateCard(R1);
						}
						
						setTimeout(function(){
							R1=Math.floor(Math.random()*3);
							R2=Math.floor(Math.random()*3);
							if((R1==0)&&(R2==0))
							{
								rotateCard(R1);
							}
							else if((R1==0)&&(R2==1))
							{
								swapStraight(R1,R2,BX0,BX1,BY1);
							}
							else if((R1==0)&&(R2==2))
							{
								swapStraight(R1,R2,BX0,BX2,BY1);
							}
							else if((R1==1)&&(R2==0))
							{
								swapStraight(R1,R2,BX1,BX0,BY1);
							}
							else if((R1==1)&&(R2==1))
							{
								rotateCard(R1);
							}
							else if((R1==1)&&(R2==2))
							{
								swapStraight(R1,R2,BX1,BX2,BY1);
							}
							else if((R1==2)&&(R2==0))
							{
								swapStraight(R1,R2,BX2,BX0,BY1);
							}
							else if((R1==2)&&(R2==1))
							{
								swapStraight(R1,R2,BX2,BX1,BY1);
							}
							else if((R1==2)&&(R2==2))
							{
								rotateCard(R1);
							}
							
							setTimeout(function(){
								R1=Math.floor(Math.random()*3);
								R2=Math.floor(Math.random()*3);
								if((R1==0)&&(R2==0))
								{
									rotateCard(R1);
								}
								else if((R1==0)&&(R2==1))
								{
									swapStraight(R1,R2,BX0,BX1,BY1);
								}
								else if((R1==0)&&(R2==2))
								{
									swapStraight(R1,R2,BX0,BX2,BY1);
								}
								else if((R1==1)&&(R2==0))
								{
									swapStraight(R1,R2,BX1,BX0,BY1);
								}
								else if((R1==1)&&(R2==1))
								{
									rotateCard(R1);
								}
								else if((R1==1)&&(R2==2))
								{
									swapStraight(R1,R2,BX1,BX2,BY1);
								}
								else if((R1==2)&&(R2==0))
								{
									swapStraight(R1,R2,BX2,BX0,BY1);
								}
								else if((R1==2)&&(R2==1))
								{
									swapStraight(R1,R2,BX2,BX1,BY1);
								}
								else if((R1==2)&&(R2==2))
								{
									rotateCard(R1);
								}
								
								setTimeout(function(){
									R1=Math.floor(Math.random()*3);
									R2=Math.floor(Math.random()*3);
									if((R1==0)&&(R2==0))
									{
										rotateCard(R1);
									}
									else if((R1==0)&&(R2==1))
									{
										swapStraight(R1,R2,BX0,BX1,BY1);
									}
									else if((R1==0)&&(R2==2))
									{
										swapStraight(R1,R2,BX0,BX2,BY1);
									}
									else if((R1==1)&&(R2==0))
									{
										swapStraight(R1,R2,BX1,BX0,BY1);
									}
									else if((R1==1)&&(R2==1))
									{
										rotateCard(R1);
									}
									else if((R1==1)&&(R2==2))
									{
										swapStraight(R1,R2,BX1,BX2,BY1);
									}	
									else if((R1==2)&&(R2==0))
									{
										swapStraight(R1,R2,BX2,BX0,BY1);
									}
									else if((R1==2)&&(R2==1))
									{
										swapStraight(R1,R2,BX2,BX1,BY1);
									}
									else if((R1==2)&&(R2==2))
									{
										rotateCard(R1);
									}
									
									setTimeout(function(){
										R1=Math.floor(Math.random()*3);
										R2=Math.floor(Math.random()*3);
										if((R1==0)&&(R2==0))
										{
											rotateCard(R1);
										}
										else if((R1==0)&&(R2==1))
										{
											swapStraight(R1,R2,BX0,BX1,BY1);
										}
										else if((R1==0)&&(R2==2))
										{
											swapStraight(R1,R2,BX0,BX2,BY1);
										}
										else if((R1==1)&&(R2==0))
										{
											swapStraight(R1,R2,BX1,BX0,BY1);
										}
										else if((R1==1)&&(R2==1))
										{
											rotateCard(R1);
										}
										else if((R1==1)&&(R2==2))
										{
											swapStraight(R1,R2,BX1,BX2,BY1);
										}	
										else if((R1==2)&&(R2==0))
										{
											swapStraight(R1,R2,BX2,BX0,BY1);
										}
										else if((R1==2)&&(R2==1))
										{
											swapStraight(R1,R2,BX2,BX1,BY1);
										}
										else if((R1==2)&&(R2==2))
										{
											rotateCard(R1);
										}
										
										setTimeout(function(){
											R1=Math.floor(Math.random()*3);
											R2=Math.floor(Math.random()*3);
											if((R1==0)&&(R2==0))
											{
												rotateCard(R1);
											}
											else if((R1==0)&&(R2==1))
											{
												swapStraight(R1,R2,BX0,BX1,BY1);
											}
											else if((R1==0)&&(R2==2))
											{
												swapStraight(R1,R2,BX0,BX2,BY1);
											}
											else if((R1==1)&&(R2==0))
											{
												swapStraight(R1,R2,BX1,BX0,BY1);
											}
											else if((R1==1)&&(R2==1))
											{
												rotateCard(R1);
											}
											else if((R1==1)&&(R2==2))
											{
												swapStraight(R1,R2,BX1,BX2,BY1);
											}	
											else if((R1==2)&&(R2==0))
											{
												swapStraight(R1,R2,BX2,BX0,BY1);
											}
											else if((R1==2)&&(R2==1))
											{
												swapStraight(R1,R2,BX2,BX1,BY1);
											}
											else if((R1==2)&&(R2==2))
											{
												rotateCard(R1);
											}
											
											setTimeout(function(){
												/*group = new Kinetic.Group({
													x:0,
													y:0,
													height:150,
													width:550,
													id:'SelectButton'
												});
												
												SelectRect = new Kinetic.Rect({
													x:0,
													y:0,
													width:550,
													height:98,
													fill:'yellow',
													stroke:'#000000',
													strokeWidth:4
												});
												
												SelectText = new Kinetic.Text({
													x:125,
													y:10,
													text:'SELECT',
													fontSize:80,
													fontFamily:'Comic Sans MS',
													fill:'#000000'
												});
												
												group.add(SelectRect);
												group.add(SelectText);
												mainlayer.add(group);
												stage.draw();*/
												
												Blanks[0].on('click',function(){
													if(isTweening==0)
													{
														flipCardsOver3(0);
													}
												});
												Blanks[1].on('click',function(){
													if(isTweening==0)
													{
														flipCardsOver3(1);
													}
												});
												Blanks[2].on('click',function(){
													if(isTweening==0)
													{
														flipCardsOver3(2);
													}
												});
											},600);
										},600);
									},600);
								},600);
							},600);
						},600);
					},600);
				},600);
			},600);
		},600);
	}
	//Hard. Lots of Shuffling
	else
	{
		C.sort(function(){return 0.5-Math.random()});
		DoIt=1;
	
		while(DoIt==1)
		{
			if((C[0]==0)||(C[1]==0)||(C[2]==0))
			{
				DoIt=0;
			}
			else
			{
				C.sort(function(){return 0.5-Math.random()});
			}
		}
		
		BX0=Blanks[0].getX();
		BX1=Blanks[1].getX();
		BX2=Blanks[2].getX();
		BY1=Blanks[0].getY();
		
		swapStraight(0,1,BX0,BX1,BY1);
		swapStraight(0,2,BX0,BX2,BY1);
		swapStraight(1,2,BX1,BX2,BY1);
		
		setTimeout(function(){
			/*group = new Kinetic.Group({
				x:0,
				y:0,
				height:150,
				width:550,
				id:'SelectButton'
			});
			
			SelectRect = new Kinetic.Rect({
				x:0,
				y:0,
				width:550,
				height:98,
				fill:'yellow',
				stroke:'#000000',
				strokeWidth:4
			});
			
			SelectText = new Kinetic.Text({
				x:125,
				y:10,
				text:'SELECT',
				fontSize:80,
				fontFamily:'Comic Sans MS',
				fill:'#000000'
			});
			
			group.add(SelectRect);
			group.add(SelectText);
			mainlayer.add(group);
			stage.draw();*/
			
			Blanks[0].on('click',function(){
				if(isTweening==0)
				{
					flipCardsOver3(0);
				}
			});
			Blanks[1].on('click',function(){
				if(isTweening==0)
				{	
					flipCardsOver3(1);
				}
			});
			Blanks[2].on('click',function(){
				if(isTweening==0)
				{
					flipCardsOver3(2);
				}
			});
		},600);
	}
	
	/*Blanks[0].on('click',function(){
		if(isTweening==0)
		{
			flipCardsOver3(0);
		}
	});
	Blanks[1].on('click',function(){
		if(isTweening==0)
		{
			flipCardsOver3(1);
		}
	});
	Blanks[2].on('click',function(){
		if(isTweening==0)
		{
			flipCardsOver3(2);
		}
	});*/
}

function rotateCard(E1)
{
	isTweening=1;
	Tweeny1=new Kinetic.Tween({
		node:Blanks[E1], 
		duration:0.5,
		rotation:Math.PI*2,
		onFinish:function(){
			isTweening=0;
			this.destroy();
		}
	});
	Tweeny1.play();
}

function swapStraight(E1,E2,X1,X2,Y1)
{
	isTweening=1;
	Temp=parseInt(C[E1]);
	C[E1]=parseInt(C[E2]);
	C[E2]=Temp;
	
	Tweeny1=new Kinetic.Tween({
		node:Blanks[E1], 
		duration:0.5,
		x:X2,
		onFinish:function(){
			this.destroy();
		}
	});
	Tweeny1.play();
	
	Tweeny2=new Kinetic.Tween({
		node:Blanks[E2], 
		duration:0.5,
		x:X1,
		onFinish:function(){
			isTweening=0;
			this.destroy();
		}
	});
	Tweeny2.play();
		
	Temp2=Blanks[E1];
	Blanks[E1]=Blanks[E2];
	Blanks[E2]=Temp2;
}

function flipCardsOver3(Pos)
{
	G=stage.get('Group');
	H=G.length;
	Tweens=[];
	for(i=0;i<H;i++)
	{
		Tweens[i]=new Kinetic.Tween({
			node:G[i], 
			duration:0.1,
			scaleX:0.00001,
			onFinish:function(){
				this.node.destroy();
				stage.draw();
				ShowCards--;
				if(ShowCards<=0)
				{
					winOrLose(Pos);
					this.destroy();
				}
			}
		});
		Tweens[i].play()
	}
}

function winOrLose(Pos)
{
	if(C[Pos]==0)
	{
		WinCount++;
		BannerText="WINNER! |"+WinCount+"-"+LoseCount;
	}
	else
	{
		LoseCount++;
		BannerText="YOU LOSE. |"+WinCount+"-"+LoseCount;;
	}
	
	for(i=0;i<3;i++)
	{
		Cards[i]=makeCard(C[i],(120*(i+1)),150);
		mainlayer.add(Cards[i]);
		ShowCards++;
	}
	
	DisplayText = new Kinetic.Text({
		x:15,
		y:15,
		text:BannerText,
		fontSize:50,
		fontFamily:'Comic Sans MS',
		fill:'#000000',
		id:'BannerText'
	});
	
	group = new Kinetic.Group({
		x:0,
		y:300,
		height:150,
		width:550,
		id:'PlayAgainButton'
	});
	
	PlayRect = new Kinetic.Rect({
		x:0,
		y:0,
		width:550,
		height:98,
		fill:'yellow',
		stroke:'#000000',
		strokeWidth:4
	});

	PlayAgainText = new Kinetic.Text({
		x:100,
		y:10,
		text:'Play Again',
		fontSize:80,
		fontFamily:'Comic Sans MS',
		fill:'#000000'
	});
	
	group.add(PlayRect);
	group.add(PlayAgainText);
	
	mainlayer.add(DisplayText);
	mainlayer.add(group);
	
	stage.draw();
	
	group.on('click',killGame);
}

function killGame()
{
	G = stage.get('#BannerText');
	H = G.length;
	for(i=0;i<H;i++)
	{
		G[i].destroy();
	}
	stage.draw();
	
	G = stage.get('#PlayAgainButton');
	H = G.length;
	for(i=0;i<H;i++)
	{
		G[i].destroy();
	}
	stage.draw();
	
	G=stage.get('Group');
	H=G.length;
	Tweens=[];
	for(i=0;i<H;i++)
	{
		Tweens[i]=new Kinetic.Tween({
			node:G[i], 
			duration:0.1,
			scaleX:0.00001,
			onFinish:function(){
				this.node.destroy();
				stage.draw();
				ShowCards--;
				if(ShowCards<=0)
				{
					createGame();
					this.destroy();
				}
			}
		});
		Tweens[i].play()
	}
}