use std::io;
use rand::Rng;
use std::cmp::Ordering;
use colored::*;

pub fn run(){
    println!("****GUESSING GAME****");

let number :u32 =  rand::thread_rng().gen_range(0..=10000000);
    println!("secret number:{}",number);


    loop{
        println!("Please INput your guess:");
    
        let mut guess :String  = String::new();
    
        io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");
    
        let guess:u32 = match guess.trim().parse(){
            // accept inly u32 data types 
            Ok(num) => num,
            // catch every error, ignore inpu=t and go to nex iteration
            Err(_) => continue,


        };
        //println!("You guessed:{}",guess);
    
        match guess.cmp(&number) {
            Ordering::Less => {println!("{}","Too small!!".red())},

            Ordering::Greater => {println!("{}","Too Big!!".red())},

            Ordering::Equal => {
                println!("{}","You Win!!!!".green()); 
               break; 
            },
        }
    }


   
}

