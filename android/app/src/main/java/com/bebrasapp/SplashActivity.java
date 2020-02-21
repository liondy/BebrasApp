package com.bebrasapp;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.media.MediaPlayer;
import android.widget.MediaController;
import android.widget.VideoView;

import androidx.appcompat.app.AppCompatActivity;
import com.blogspot.atifsoftwares.animatoolib.Animatoo;


public class SplashActivity extends AppCompatActivity{
    protected VideoView splashvid;
    protected MediaPlayer mp;
    protected MediaController mc;
    protected int waktu_delay = 2000;
    
    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.launch_screen);

        this.splashvid = findViewById(R.id.vidSplash);
        this.mc = new MediaController(this);
        mc.setAnchorView(this.splashvid);

        this.splashvid.setVideoURI(Uri.parse("android.resource://" + getPackageName() + "/" + R.raw.vdsplash));
        this.splashvid.start();

        new Handler().postDelayed(new Runnable(){
            @Override
            public void run(){
                Intent intent = new Intent(SplashActivity.this, MainActivity.class);
                startActivity(intent);
                Animatoo.animateFade(SplashActivity.this);
                finish();
            }
        },waktu_delay);
    }
}