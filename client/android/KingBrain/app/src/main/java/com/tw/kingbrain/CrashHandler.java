package com.tw.kingbrain;

import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Process;
import android.util.Log;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by pxxu on 11/01/2018.
 */

public final class CrashHandler implements Thread.UncaughtExceptionHandler {
    private static final String TAG = "CrashHandler";
    private Context mAppContext;

    protected CrashHandler(Context context) {
        mAppContext = context;
    }

    @Override
    public void uncaughtException(Thread thread, Throwable throwable) {
        File cacheFile = mAppContext.getCacheDir();
        final String pathName = cacheFile.getAbsolutePath() + File.separator + "log.txt";
        File logFile = new File(pathName);
        if (logFile.exists()) {
            PrintWriter pw = null;
            try {
                pw = new PrintWriter(new BufferedWriter(new FileWriter(logFile, logFile.exists())));
                dumpPhoneInfo(pw);
                pw.println();
            } catch (IOException e) {
                Log.wtf(TAG, e);
            } catch (PackageManager.NameNotFoundException e) {
                Log.wtf(TAG, e);
            } finally {
                if (pw != null) {
                    pw.close();
                }
            }
        }

        Process.killProcess(Process.myPid());
    }

    private void dumpPhoneInfo(PrintWriter pw) throws PackageManager.NameNotFoundException {
        pw.println("##################################################################");
        pw.println("time: " + new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", OsConstants.US_Locale).format(new Date(System.currentTimeMillis())));
        pw.println("App Version: " + SysUtils.getAppVersionName(mAppContext) + "_" + SysUtils.getAppVersionCode(mAppContext));
        pw.println("OS Version: " + SysUtils.getOsVersionName() + "_" + SysUtils.getOsVersionCode());
        pw.println("Vendor: " + SysUtils.getManufacturerInfo());
        pw.println("Model: " + SysUtils.getModelInfo());
        pw.println("CPU ABI: " + SysUtils.getOsABI());
        pw.println("OS Incremental: " + SysUtils.getOsIncremental());
        pw.println("##################################################################");
    }
}
