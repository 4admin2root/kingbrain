package com.tw.kingbrain;

import java.nio.charset.Charset;
import java.util.Locale;

/**
 * Created by pxxu on 11/01/2018.
 */

public final class OsConstants {
    public static final Locale US_Locale = Locale.US;
    // UTF-8 is the default on Android
    public static final Charset UTF_8 = Charset.defaultCharset();
    public static final Charset US_ASCII = Charset.forName("US-ASCII");
}

