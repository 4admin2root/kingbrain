package com.tw.kingbrain;

import android.app.Application;

import com.squareup.leakcanary.LeakCanary;

/**
 * Created by pxxu on 11/01/2018.
 */

public final class KingBrain extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        Thread.setDefaultUncaughtExceptionHandler(new CrashHandler(this));
        if (LeakCanary.isInAnalyzerProcess(this)) {
            return;
        }
        LeakCanary.install(this);
    }
}
