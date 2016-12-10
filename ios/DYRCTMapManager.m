//
//  DYRCTMapManager.m
//  dyrnDemoCi
//
//  Created by xiongchangjiang on 2016/12/10.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "DYRCTMapManager.h"

@implementation DYRCTMapManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[MKMapView alloc] init];
}

@end
