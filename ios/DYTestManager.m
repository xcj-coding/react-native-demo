//
//  DYTestManager.m
//  dyrnDemoCi
//
//  Created by xiongchangjiang on 2016/12/10.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "DYTestManager.h"
#import "RCTEventDispatcher.h"
#import "RCTLog.h"

@implementation DYTestManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(BBB:(NSString *)name location:(NSString *)location callback:(RCTResponseSenderBlock)callback)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
  NSString *message = @"回调取到的数据 ！！！";
  callback(@[[NSNull null], message]);
}

RCT_EXPORT_METHOD(AAA:(RCTResponseSenderBlock)callback)
{
  NSString *message = @"回调取到的数据 ！！！";
  callback(@[[NSNull null], message]);
}

- (NSDictionary *)constantsToExport
{
  return @{ @"YEAR": @"2016"};
}

@synthesize bridge = _bridge;
- (void)calendarEventReminderReceived:(NSNotification *)notification
{
  NSString *eventName = notification.userInfo[@"name"];
  [self.bridge.eventDispatcher sendAppEventWithName:@"EventReminder" body:@{@"name": eventName}];
}

@end
