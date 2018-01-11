package com.tw.kingbrain;

import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.os.Build;
import android.support.annotation.NonNull;

/**
 * Created by pxxu on 11/01/2018.
 */

public final class SysUtils {

    /**
     * 获取版本号.
     *
     * @param context {@link Context}
     * @return 版本号
     */
    public static int getAppVersionCode(@NonNull Context context) throws PackageManager.NameNotFoundException {
        PackageManager manager = context.getPackageManager();
        PackageInfo info = manager.getPackageInfo(context.getPackageName(), 0);
        return info.versionCode;
    }

    /**
     * 获取版本名.
     *
     * @param context {@link Context}
     * @return 版本名
     */
    @NonNull
    public static String getAppVersionName(@NonNull Context context) throws PackageManager.NameNotFoundException {
        PackageManager manager = context.getPackageManager();
        PackageInfo info = manager.getPackageInfo(context.getPackageName(), 0);
        return info.versionName;
    }

    /**
     * 获取操作系统版本号.
     *
     * @return 操作系统版本号
     */
    public static int getOsVersionCode() {
        return Build.VERSION.SDK_INT;
    }

    /**
     * 获取操作系统版本名.
     *
     * @return 操作系统版本名
     */
    @NonNull
    public static String getOsVersionName() {
        return Build.VERSION.RELEASE;
    }

    /**
     * 获取设备制造商信息.
     *
     * @return 设备制造商信息
     */
    @NonNull
    public static String getManufacturerInfo() {
        return Build.MANUFACTURER;
    }

    /**
     * 获取设备信息.
     *
     * @return 设备信息
     */
    @NonNull
    public static String getModelInfo() {
        return Build.MODEL;
    }


    /**
     * 获取cpu的abi
     */
    @SuppressWarnings("deprecation")
    public static String getOsABI() {
        final String abi;
        if (Build.VERSION_CODES.LOLLIPOP <= Build.VERSION.SDK_INT) {
            abi = Build.SUPPORTED_ABIS[0];
        } else {
            abi = Build.CPU_ABI;
        }
        return abi;
    }

    /**
     * 获取系统源码版本号
     *
     * @return 源码版本号
     */
    public static String getOsIncremental() {
        return Build.VERSION.INCREMENTAL;
    }
}