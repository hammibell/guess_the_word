player1_name=localStorage.getItem("player1name");
player2_name=localStorage.getItem("player2name");
player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn-"+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn-"+player2_name;

function submit(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("The word in lower case ="+ word);

    character1=word.charAt(1);

    length_div_2=Math.floor(word.length/2);
    character2=word.charAt(length_div_2);

    length_minus_1=word.length-1;
    character3=word.charAt(length_minus_1);

    remove_character_1=word.replace(character1, "_" );
    remove_character_2=remove_character_1.replace(character2, "_");
    remove_character_3=remove_character_2.replace(character3, "_");
    console.log("The word"+remove_character_3);


    question="<h4 id='word_display'>Q. "+remove_character_3+"</h4>" ;
    input_box="<br> Answer: <input type='text' id='input_checkbox'>";
    check_button="<br> <br> <button type='button' class='btn btn-info' onclick='check();'>Check</button>";
    row=question + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    




}

var question_turn="player1";
var answer_turn="player2";

function check(){

    getAnswer=document.getElementById("input_checkbox").value;
    answer=getAnswer.toLowerCase();
    console.log("answer in lowercase is"+ answer);

    if(answer == word){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML=player1_score;


        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML=player2_score;

        }


        
    }

    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML="Question Turn - "+ player2_name


    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML="Question Turn - "+ player1_name;

    }

    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML="Answer Turn - "+ player2_name;


    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML="Answer Turn - "+ player1_name;

    }

    document.getElementById("output").innerHTML=" ";
    




}

