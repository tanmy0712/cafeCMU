﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
using System;
using DevExpress.Xpo;
using DevExpress.Xpo.Metadata;
using DevExpress.Data.Filtering;
using System.Collections.Generic;
using System.ComponentModel;
using System.Reflection;
namespace CafeCMUhuhu.Module.BusinessObjects.ORMDataModel1
{

    public partial class DinhLuong : DevExpress.Persistent.BaseImpl.BaseObject
    {
        SanPham fSanPham_ID;
        [Association(@"DinhLuongReferencesSanPham")]
        public SanPham SanPham_ID
        {
            get { return fSanPham_ID; }
            set { SetPropertyValue<SanPham>(nameof(SanPham_ID), ref fSanPham_ID, value); }
        }
        int fSoLuong;
        public int SoLuong
        {
            get { return fSoLuong; }
            set { SetPropertyValue<int>(nameof(SoLuong), ref fSoLuong, value); }
        }
    }

}
