---
title: "Start Building Apps | Android App Development"
date: "2019-08-04"
author: "mr-redible"
category: "Android app development"
slug: "android-start-building-apps"
cover: "images/android-cover.jpg"
tags:
  - android
  - app
  - mobile
---

Since you have [setup everything needed for android app development](/android-getting-started), you can start building apps! Wohoo 🙌

---

## Creating an Android project

1. Create a new project in android studio -
   - If you dont have an opened project, click **Start a new Android Studio project**.
   - If you have an opened project, select **File > New > New Project**<br /><br />
2. In the **New Project** screen, enter these -

   - **Application Name** : Name of your application <Any name which you like> (For eg, "My First App")
   - **Company Domain** : Your company domain name (You can enter `android.example.com` if you don't own one!)
   - **Package Name** : You may or may not edit this field. This field uniquely identifies your app in Google Play Store and differentiates it from the other apps. No two apps on Play Store can have same package name.<br/>
     Check out the guidelines and naming conventions [here](https://developer.android.com/guide/topics/manifest/manifest-element.html#package).

   - **Project Location** - Choose an appropriate location for your project in your PC.<br /><br />

3. Click **Next**.<br /><br />
4. In **Target Android Devices** screen,
   - As a beginner, you can keep the default settings and continue.
   - Minimum SDK refers to the minimum Android version your app needs to run. You can select an appropriate minimum SDK for your app or keep the default one or you can click the link available in that screen for help. Know more about these [here](https://developer.android.com/training/basics/supporting-devices/platforms.html).
   - Click **Next**.<br /><br />
5. In **Add an Activity to Mobile** screen, select **Empty Activity** and click **Next**.<br /><br />
6. In **Customize the Activity** screen, keep the default values and click **Finish**.<br /><br />
7. When the IDE opens, be sure to review the most important files. First of all, make sure that the **Project** window is opened (Select **View -> Tool Windows -> Project**). Also, **Android** view should be selected from the drop-down list at the top of that window.
   ![Android project](./Project_Android.png)

8. These are some of the **important** files:

   - **`AndroidManifest.xml` (app > manifests > AndroidManifest.xml)** : The [manifest](https://developer.android.com/guide/topics/manifest/manifest-intro.html) file describes the fundamental characteristics of the app and defines each of its components.
   - **`build.gradle` (Gradle Scripts > build.gradle)** : You'll see two files with this name: one for the "project" and one for the "app" module. Each module has its own build.gradle file, but this project currently has just one module. You'll mostly work with the module's build.gradle file to configure how the Gradle tools compile and build your app. For more information about this file, see [Configure Your Build](https://developer.android.com/studio/build/index.html).
   - **`MainActivity.java` (app > java > com.example.myfirstapp > MainActivity.java)** : This is the main activity (the entry point for your app). When you build and run the app, the system launches an instance of this [Activity](https://developer.android.com/reference/android/app/Activity.html) and loads its layout.
   - **`activity_main.xml` (app > res > layout > activity_main.xml)** : This XML file defines the layout for the activity's UI. It contains a [TextView](https://developer.android.com/reference/android/widget/TextView.html) element with the text "Hello world!".

---

## Run your App!

To learn how to run your app on an Emulator or a Real Device, [**visit this link**](https://developer.android.com/training/basics/firstapp/running-app.html).

<div style="width: 100%; display: flex; justify-content: space-between;">
  <span>Prev: <a href="/android-getting-started">Getting started</a></span>
  <span>Next: <a href="/android-designing-basics">Designing basics</a></span>
</div>
