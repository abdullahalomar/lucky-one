import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question-ans'>
            <div className='answer'>
                <h4>প্রশ্নঃ how react works?</h4>
                <h5>উত্তরঃ</h5>
                <p>
                React.js কে সাধারণত একটি অ্যাপ্লিকেশনে ভিউ লেয়ার হিসেবে ভাবা হয়। React কার্যকরভাবে জাভাস্ক্রিপ্টে DOM পুনঃনির্মাণ করতে এবং প্রকৃতপক্ষে
                ঘটে যাওয়া পরিবর্তনগুলিকে DOM-এ পুশ করতে দেয়। ঠিক যেমন jQuery UI উপাদানগুলিকে ম্যানিপুলেট করে, বা হ্যান্ডেলবার টেমপ্লেটগুলি ঢোকানো হয়, React 
                উপাদানগুলি ব্যবহারকারী যা দেখে তা পরিবর্তন করে৷ React আমাদের ফ্রন্টএন্ড কোডে ফিট করে। ডেটা UI-তে রেন্ডার করতে  React উপাদানে প্রেরণ করে যা পৃষ্ঠায়
                HTML পাওয়ার কাজ পরিচালনা   করে।
                </p>
            </div>
            <div className='answer'>
                <h4>প্রশ্নঃ how useState works?</h4>
                <h5>উত্তরঃ</h5>
                <p>
                useState একটি হুক (ফাংশন) যা কার্যকরী উপাদানগুলিতে স্টেট ভেরিয়েবল থাকতে দেয়। এই ফাংশনে প্রারম্ভিক অবস্থা পাস করা হলে এবং 
                এটি বর্তমান অবস্থার মান এবং এই মান আপডেট করার জন্য অন্য একটি ফাংশন সহ একটি ভেরিয়েবল প্রদান করে। একটি কার্যকরী উপাদান তৈরি করা হলে
                এবং এটিতে কিছু react হুক throw করা হলে তা react ট্র্যাক করে, এটি আপডেটও করতে পারে। this.state/this.setSate এর সমতুল্য, 
                প্রতিক্রিয়ায় স্টেট হুকের জন্য একটি সম্পূর্ণ নির্দেশিকা হিসাবে কাজ করে। useState ফাংশন উপাদানগুলিতে state যোগ করতে সক্ষম করে। একটি ফাংশন 
                কম্পোনেন্টের ভিতরে React.useState কল করলে সেই কম্পোনেন্টের সাথে যুক্ত একটি স্টেট তৈরি হয়।
                </p>
            </div>
        </div>
    );
};

export default Question;