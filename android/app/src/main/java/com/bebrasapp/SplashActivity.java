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
    protected ImageView beaver;
    protected MediaPlayer mp;
    protected int waktu_delay = 2000;
    
    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        
        // this.beaver = (ImageView)findViewById(R.id.beaver);
        // beaver.animate().alpha(0f).setDuration(500);
        this.mp = MediaPlayer.create(SplashActivity.this,R.raw.whistle);
        
        // Intent intent = new Intent(SplashActivity.this, MainActivity.class);
        // startActivity(intent);
        // Animatoo.animateFade(SplashActivity.this);
        // finish();

        new Handler().postDelayed(new Runnable(){
            @Override
            public void run(){
                
                Intent intent = new Intent(SplashActivity.this, MainActivity.class);
                startActivity(intent);
                Animatoo.animateFade(SplashActivity.this);
                mp.start();
                finish();
            }
        },waktu_delay);
    }
}