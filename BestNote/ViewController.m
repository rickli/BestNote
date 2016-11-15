//
//  ViewController.m
//  BestNote
//
//  Created by rick on 26/10/2016.
//  Copyright © 2016 Wenba. All rights reserved.
//

#import "ViewController.h"
#import "User.h"

#import <UserNotifications/UserNotifications.h>

@interface ViewController ()

@property (nonatomic) User *user;
@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    /* OC class property Example Implement
    for (int i = 0; i < 3; i++) {
        self.user = [[User alloc] init];
        NSLog(@"User Count = %ld",(long)User.userCount);
        NSLog(@"Identifier = %@",User.identifier);
    }
    
    [User resetIdentifier];
    NSLog(@"Identifier = %@",User.identifier);
     */
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
    UNAuthorizationOptions options = UNAuthorizationOptionAlert + UNAuthorizationOptionSound;
    [center requestAuthorizationWithOptions:options
                          completionHandler:^(BOOL granted, NSError * _Nullable error) {
                              if (!granted) {
                                  NSLog(@"Something went wrong");
                              }
                          }];
    [center getNotificationSettingsWithCompletionHandler:^(UNNotificationSettings * _Nonnull settings) {
        if (settings.authorizationStatus != UNAuthorizationStatusAuthorized) {
            // Notifications not allowed
        }
    }];
    
    UNMutableNotificationContent *content = [UNMutableNotificationContent new];
    content.title = @"Don't forget";
    content.body = @"Buy some milk";
    content.sound = [UNNotificationSound defaultSound];
    content.categoryIdentifier = @"JPLReminderCategory";
    UNTimeIntervalNotificationTrigger *trigger = [UNTimeIntervalNotificationTrigger triggerWithTimeInterval:300
                                                                                                    repeats:YES];
//    NSDate *date = [NSDate dateWithTimeIntervalSinceNow:3600];
//    NSDateComponents *triggerDate = [[NSCalendar currentCalendar]
//                                     components:NSCalendarUnitYear +
//                                     NSCalendarUnitMonth + NSCalendarUnitDay +
//                                     NSCalendarUnitHour + NSCalendarUnitMinute +
//                                     NSCalendarUnitSecond fromDate:date];
//    UNCalendarNotificationTrigger *trigger = [UNCalendarNotificationTrigger triggerWithDateMatchingComponents:triggerDate
//                                                                                                      repeats:NO];
//    UNLocationNotificationTrigger *locTrigger = [UNLocationNotificationTrigger triggerWithRegion:region repeats:NO];
    NSString *identifier = @"JPLLocalNotification";
    UNNotificationRequest *request = [UNNotificationRequest requestWithIdentifier:identifier
                                                                          content:content trigger:trigger];
    
    [center addNotificationRequest:request withCompletionHandler:^(NSError * _Nullable error) {
        if (error != nil) {
            NSLog(@"Something went wrong: %@",error);
        }
    }];
    UNNotificationAction *snoozeAction = [UNNotificationAction actionWithIdentifier:@"Snooze"
                                                                              title:@"Snooze" options:UNNotificationActionOptionNone];
    UNNotificationAction *deleteAction = [UNNotificationAction actionWithIdentifier:@"Delete"
                                                                              title:@"Delete" options:UNNotificationActionOptionDestructive];
    // Objective-C
    UNNotificationCategory *category = [UNNotificationCategory categoryWithIdentifier:@"JPLReminderCategory"
                                                                              actions:@[snoozeAction,deleteAction] intentIdentifiers:@[]
                                                                              options:UNNotificationCategoryOptionNone];
    NSSet *categories = [NSSet setWithObject:category];
    [center setNotificationCategories:categories];
    
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
