package com.bebrasapp;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.widget.ImageView;
import android.media.MediaPlayer;
import android.view.animation.AnimationUtils;
import android.view.animation.Animation;
import androidx.appcompat.app.AppCompatActivity;
import com.blogspot.atifsoftwares.animatoolib.Animatoo;


public class SplashActivity extends AppCompatActivity{
    protected int waktu_delay = 1000;
    protected ImageView beaver;
    protected MediaPlayer mp;
    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        
        this.beaver = (ImageView)findViewById(R.id.beaver);
        this.mp = MediaPlayer.create(SplashActivity.this,R.raw.splash_sound);
        
        // beaver.animate().alpha(0f).setDuration(500);
        Animation animation = AnimationUtils.loadAnimation(getApplicationContext(),R.anim.fade_out);
        beaver.startAnimation(animation);

        // new Handler().postDelayed(new Runnable(){
        //     @Override
        //     public void run(){
        //         Intent intent = new Intent(SplashActivity.this, MainActivity.class);
        //         startActivity(intent);
        //         Animatoo.animateFade(SplashActivity.this);
        //         finish();
        //     }
        // },waktu_delay);

        Thread timer = new Thread(){

            @Override
            public void run(){
                
                try {
                    sleep(3000);
                    mp.start();
                    Intent intent = new Intent(getApplicationContext(),MainActivity.class);
                    startActivity(intent);
                    super.run(); 
                    finish();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }  
            }
        };
        timer.start();
    }

    // @Override
    // protected void onPause(){
    //     super.onPause();
    //     this.mp.release();
        
    // }
}